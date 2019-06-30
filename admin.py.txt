import sqlite3

#ADMIN LOGIN

def checkemailandphone(emailid,phoneno):
    p = str(phoneno)
    flagphone = 0
    flagemail = 1
    alphacount = 0
    for i in emailid:
        if i == '@':
            alphacount += 1
        elif i<='Z' and i>='A':
            break
    if len(emailid) < 8 or alphacount != 1 or emailid[-1] == '@' or emailid[0] == '@':
        flagemail = 0
    if len(p) == 10 and p[0] != 0:
        flagphone = 1
    return flagemail,flagphone

def checkpas(pasw):
    paslen = len(pasw)
    digit = 0
    sletter = 0
    cletter = 0
    special = 0
    flag = 0

    for i in pasw:
        if i<='z' and i>='a':
            sletter += 1
        elif i<='Z' and i>='A':
            cletter += 1
        elif i<='9' and i>='0':
            digit += 1
        elif ((i<='&' and i>='!' and i!='"') or (i == '@')):
            special += 1

    while True:
        if paslen > 12 or paslen < 6:
            print('Length of password should be between 6 and 12')
            break
        elif digit <1:
            print('No Digits in your password')
            break
        elif sletter <1:
            print('No small letter in your password')
            break
        elif cletter <1:
            print('No capital letter in your password')
            break
        elif special <1:
            print('No Special characters in your password')
            break
        else:
            flag = 1
            break
    return flag

#ADMIN MODULE INTIATION

connect_lib = sqlite3.connect('library.db')
lib = connect_lib.cursor()

def login():
    lib.execute('SELECT name,username,password FROM admintolist')
    user_pas_tup = lib.fetchall()
    while True:
        ussid = input('\nUsername: ')
        pas = input('Password: ')
        flag = 0
        for i in user_pas_tup:
            if i[1] == ussid and i[2] == pas:
                print('\nWelcome',i[0])
                whattodo()
                flag = 1
        if flag == 1:
            break
        else:
            print('Username and password not present! Sign in before Login')
            break


#ADMIN LOGGED IN AND NOW CAN SELECT WHAT HE WANTS TO DO

lib.execute('CREATE TABLE IF NOT EXISTS studenttolist(name TEXT,sicno TEXT,phone INTEGER,email TEXT,count INTEGER)')
lib.execute('CREATE TABLE IF NOT EXISTS booktolist(name TEXT, authname TEXT, bookid TEXT, no_of_book INTEGER)')

#CODE TO ADD STUDENT TO DB
def insert_studentdata():
    name = input('Enter name of the student: ')
    sicno = input('Enter SIC no.: ')
    count = 0
    try:
        phone = int(input('Enter phone no.: '))
    except:
        phone = 0
        print('Phone no. cant have characters or be empty')
    email = input('Enter email id: ')
    flage,flagp = checkemailandphone(email,phone)
    pflag = 0
    sflag = 0
    lib.execute('SELECT sicno FROM studenttolist')
    compare_sicno = lib.fetchall()
    for i in compare_sicno:
        if sicno in i:
            sflag = 1
            print('\nThe SIC no. is already taken. ')
    lib.execute('SELECT phone FROM studenttolist')
    compare_phoneno = lib.fetchall()
    for i in compare_phoneno:
        if phone in i:
            pflag = 1
            print('\nThe phone number is already taken. ')
    if flage ==1 and flagp == 1 and pflag == 0 and sflag == 0:
        lib.execute('INSERT INTO studenttolist VALUES(?,?,?,?,?)',(name, sicno, phone, email,count))
        connect_lib.commit()
        print('Student has been added to Library')
    else:
        print('Proper phone no. or email or sicno not provided! Please re register')

#CODE TO ADD BOOK TO DB
def insert_bookdata():
    name = input('Enter name of the book: ')
    authname = input('Enter name of the author: ')
    bookid = input('Enter Book ID: ')
    try:
        no_of_book = int(input('Enter no. of books: '))
    except:
        no_of_book = None
        print('No of books cant have characters! Please re register')
    flag = 0
    lib.execute('SELECT bookid FROM booktolist')
    compare_bookid=lib.fetchall()
    for i in compare_bookid:
        if bookid in i:
            flag = 1
            print('\nThe Book ID is already taken.')
    if no_of_book != None and flag == 0:
        lib.execute('INSERT INTO booktolist VALUES(?,?,?,?)',(name, authname, bookid, no_of_book))
        connect_lib.commit()
        print('The Book has been added to Library')

#CODE TO DELETE STUDENT TO DB
def delete_studentdata():
    name = input('Enter name of the student: ')
    lib.execute('DELETE FROM studenttolist WHERE name = (?)',(name,))
    print(name,' has been deleted from student databse')
    connect_lib.commit()

#CODE TO DELETE BOOK TO DB
def delete_bookdata():
    name = input('Enter name of the book: ')
    lib.execute('DELETE FROM booktolist WHERE name = (?)',(name,))
    print(name,' has been deleted from book databse')
    connect_lib.commit()

def whattodo():
    while True:
        whatnum = input('\n1. Modify Books list\n2. Modify Students list\n3. Check list of Books\n4. Check list of students\n5. Back\nEnter your choice: ')
        if whatnum == '1':
            print('You are now modifying the book list')
            
            #CODE TO MODIFY BOOKS

            print('1. Add book\n2. Delete book')
            del_add = input('What do you want to do: ')
            if del_add == '1':
                insert_bookdata()
            elif del_add == '2':
                delete_bookdata()
            else:
                print('Invalid Input')

        elif whatnum == '2':
            print('You are now modifying the student list')
            
            #CODE TO MODIFY STUDENTS

            print('1. Add Students\n2. Delete Students')
            del_add = input('What do you want to do: ')
            if del_add == '1':
                insert_studentdata()
            elif del_add == '2':
                delete_studentdata()
            else:
                print('Invalid Input')
            
        elif whatnum == '4':
            print('\nList of Students are: ')
            lib.execute('SELECT * FROM studenttolist')
            for row in lib.fetchall():
                print('\nStudent name: ',row[0],'\nSIC no.: ',row[1],'\nPhone no.: ',row[2],'\nEmail ID: ',row[3])
        elif whatnum == '3':
            print('\nList of Books are: ')
            lib.execute('SELECT * FROM booktolist')
            for row in lib.fetchall():
                print('\nBook name: ',row[0],'\nAuthor name: ',row[1],'\nNo. of copies: ',row[3])
        elif whatnum == '5':
            print('Exited Admin Module')
            break
        else:
            print('Invalid input')

#END OF ADMIN MODULE
