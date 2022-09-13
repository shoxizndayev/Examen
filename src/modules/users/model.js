const PG = require('../../utils/postgres')

class UserModel extends PG {
    LoginUser(username, password) {
        return this.fetch(`select * from users where username = $1 and password = $2`, username, password)
    }

    getUsersStudents() {
        return this.fetch(`select * from users where role = 3`)
    }

    getUsersTeachers() {
        return this.fetch(`select * from users where role = 2`)
    }

    newUser(name, surname, username, password, phone_number, course, role) {
        return this.fetch(`
        insert into users(
            name,
            surname,
            username,
            password,
            phone_number,
            course,
            role
        ) values($1, $2, $3, $4, $5, $6, $7) 
        returning *
        `, name, surname, username, password, phone_number, course, role)
    }

    deleteUser(id) {
        return this.fetch(`delete from users where id = $1 returning *`, id)
    }
}



module.exports = new UserModel()
