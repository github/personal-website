import admin
import lib_mod_db
import sqlite3

#FOR NEW ADMIN SIGN IN

connect_lib = sqlite3.connect('library.db')
lib = connect_lib.cursor()
lib.execute('CREATE TABLE IF NOT EXISTS admintolist(name TEXT, username TEXT, password TEXT)')

def new_signin():
    name = input('Enter your full name: ')
    username = input('Enter a new username: ')
    password = input('Enter a new password: ')
    pas_flag = admin.checkpas(password)
    lib.execute('SELECT username FROM admintolist')
    admin_tup = lib.fetchall()
    flag = 0
    for i in admin_tup:
        if i[0] == username:
            flag = 1
            break
    if flag == 0 and pas_flag == 1:
        lib.execute('INSERT INTO admintolist VALUES(?,?,?)',(name, username, password))
        connect_lib.commit()
        print('New sign in successful! You are now an admin')
    elif flag == 1:
        print('Your username is already taken')

#TO CHOOSE ADMIN OR LIBRARIAN

while True:
    print('\n1.Admin Login\n2.Librarian Portal\n3.New sign in\n4.Exit')
    access_location = input('Enter where you want to access: ')
    if access_location == '1':
        print('You have entered administration portal')
        admin.login()
    elif access_location == '2':
        print('You have enetered librarian portal')
        lib_mod_db.choice()
    elif access_location == '3':
        print('\nNew sign in')
        new_signin()
    elif access_location == '4':
        print('Exited')
        lib.close()
        connect_lib.close()
        break
    else:
        print('Invalid input')
