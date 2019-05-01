---
title: "Android SQLite savepoints: nested transactions and workaround"
published: true
---
![Android SQLite](/assets/android_sqlite.jpg)
*[Origin](https://www.blikoontech.com/tutorials/android-health-app-design-saving-data-in-sqlite-database)*

Hello! In this article I’ll show one small trick with SQLite savepoints and my story how I’ve found this trick.

Google [claims](https://developer.android.com/reference/android/database/sqlite/package-summary) that Android fully supports SQLite database engine. But the code that framework provides to us sometimes isn’t implemented well, so we cannot use some SQLite features and forced to search for workarounds.

One of the features that doesn’t work as expected is [savepoint](https://sqlite.org/lang_savepoint.html). In short, it’s a tag in SQLite’s operations journal that can mark some important point in operations history to fall back to it if something was wrong. It’s similar to transaction, but savepoints have one big advantage over transactions: you can have as much savepoints as you need. You can have only one transaction at the time, but when you need to undo only particular changes inside huge transaction, savepoint can be used. However, savepoints don’t replace transactions, because they won’t be rolled back automatically in case of error, you need to manage them manually.

Savepoints may be useful for step-by-step operations that involve database and where each step can be interrupted or something can go wrong there. But even in this case you can solve this problem by state machine in code, without using database in intermediate steps.

If you really need to use savepoints, here is the trick: always start SQL statement for rolling back to particular savepoint with semicolon. Like this:

```java
sqliteDb.execSql(“;ROLLBACK TO savepointName;”);
```

That’s it for useful tricks. If you want to read a story behind this line of code and how do we get this, keep reading.

At my previous job, we extensively used SQLite for offline work with data and we strictly relied on it. Unfortunately, our business logic was written in very rigid way, so we cannot easily mock database for testing. That’s why we decided to test it with real database. In order not to create clutter in the database and make tests stateless, we decided to use nested transactions, like in Postgres.

After quick search we found out that savepoints are good choice for us. I wrote some simple test case with savepoints, and… it crashed. Exception was strange: it has stated that I’m trying to roll back non-existent transaction. But… there was only one root transaction that should be rolled back in JUnit’s AfterClass method. I’ve spent two days debugging until I’ve found this code in [android.database.DatabaseUtils#getSqlStatementType](https://developer.android.com/reference/android/database/DatabaseUtils#getSqlStatementType(java.lang.String)) (it’s called inside android.database.sqlite.SQLiteSession#executeSpecial for each SQL statement to find transactional operations, inline comments are mine):

```java
    /**
         * Performs special reinterpretation of certain SQL statements such as "BEGIN",
         * "COMMIT" and "ROLLBACK" to ensure that transaction state invariants are
         * maintained.
         *
         * This function is mainly used to support legacy apps that perform their
         * own transactions by executing raw SQL rather than calling {[@link](http://twitter.com/link) #beginTransaction}
         * and the like.
         *
         * [@param](http://twitter.com/param) sql The SQL statement to execute.
         * [@param](http://twitter.com/param) bindArgs The arguments to bind, or null if none.
         * [@param](http://twitter.com/param) connectionFlags The connection flags to use if a connection must be
         * acquired by this operation.  Refer to {[@link](http://twitter.com/link) SQLiteConnectionPool}.
         * [@param](http://twitter.com/param) cancellationSignal A signal to cancel the operation in progress, or null if none.
         * [@return](http://twitter.com/return) True if the statement was of a special form that was handled here,
         * false otherwise.
         *
         * [@throws](http://twitter.com/throws) SQLiteException if an error occurs, such as a syntax error
         * or invalid number of bind arguments.
         * [@throws](http://twitter.com/throws) OperationCanceledException if the operation was canceled.
         */
    public static int getSqlStatementType(String sql) {
            sql = sql.trim();
            if (sql.length() < 3) {
                return STATEMENT_OTHER;
            }
            String prefixSql = sql.substring(0, 3).toUpperCase(Locale.ROOT); // yep, they're determining statement type by first 3 letters of the SQL statement string
            if (prefixSql.equals("SEL")) {
                return STATEMENT_SELECT;
            } else if (prefixSql.equals("INS") ||
                    prefixSql.equals("UPD") ||
                    prefixSql.equals("REP") ||
                    prefixSql.equals("DEL")) {
                return STATEMENT_UPDATE;
            } else if (prefixSql.equals("ATT")) {
                return STATEMENT_ATTACH;
            } else if (prefixSql.equals("COM")) {
                return STATEMENT_COMMIT;
            } else if (prefixSql.equals("END")) {
                return STATEMENT_COMMIT;
            } else if (prefixSql.equals("ROL")) {
                return STATEMENT_ABORT;
            } else if (prefixSql.equals("BEG")) {
                return STATEMENT_BEGIN;
            } else if (prefixSql.equals("PRA")) {
                return STATEMENT_PRAGMA;
            } else if (prefixSql.equals("CRE") || prefixSql.equals("DRO") ||
                    prefixSql.equals("ALT")) {
                return STATEMENT_DDL;
            } else if (prefixSql.equals("ANA") || prefixSql.equals("DET")) {
                return STATEMENT_UNPREPARED;
            }
            return STATEMENT_OTHER;
        }
```

Because of this very clever code, when we try to rollback savepoint (that is done by ROLLBACK TO statement), this method decides that we are going to rollback transaction by ROLLBACK statement. It may make sense, because savepoints are not widely used and guys at Google might have easily forget about ROLLBACK TO statement, but it makes no excuses to this sophisticated approach to determine type of SQL statement by first 3 letters of SQL string. TBH, I bitterly smiled looking at that code.

More interesting things are coming. In search for workaround for this behavior, I’ve asked a question on StackOverflow, googled a lot until I found [this issue on Android Issue Tracker](https://issuetracker.google.com/issues/36957161). In short, this issue was opened in 2012, hanged in assigned state since then, had some comments (including one comment with possible workaround that I’ve mentioned above and patch for adding savepoint support to the framework) in 2013 until I wrote additional comment in 2017. After my comment, it was reassigned and fixed in few days with note that “fix will be available in Android P”. I understand that this issue had low priority, but… I haven’t seen such a big gap between opening an issue and resolving it before.

This story proves that Android framework is imperfect, especially its SQLite support. As a conclusion I would recommend you to use savepoints in Android app judiciously, and only when you have no other choice.

Thanks for reading! Hope it will be useful for you.
