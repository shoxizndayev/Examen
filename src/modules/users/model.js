const PG = require('../../utils/postgres')

class UserModel extends PG {
    LoginUser(username, password) {
        return this.fetch(`select * from users where username = $1 and password = $2`, username, password)
    }

    getUsersStudents() {
        return this.fetch(`select * from users where role = 'student'`)
    }

    getUsersTeachers() {
        return this.fetch(`select * from users where role = 'teacher'`)
    }

    getTeacherGroups() {
        return this.fetch(`
        select u.name, u.surname, g.group_name 
        from users as u
        inner join groups as g
        on u.id = g.user_id
        where u.role = 'teacher';
        `)
    }

    getStudentGroups() {
        return this.fetch(`
        select u.name, u.surname, g.group_name 
        from users as u
        inner join groups as g
        on u.id = g.user_id
        where u.role = 'student';
        `)
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
