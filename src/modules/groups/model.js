const PG = require('../../utils/postgres')

class GroupsModel extends PG {
    getGroups() {
        return this.fetch(`select * from groups`)
    }

    getGroupHomework() {
        return this.fetch(`
        select g.group_name, h.title, u.name, u.surname
        from groups as g
        inner join homeworks as h
        on g.id = h.group_id
        inner join users as u
        on g.user_id = u.id
        where u.role='student';
        `)
    }

    addGroup() {
        return this.fetch(`
        insert into groups(group_name, user_id, course_id) values($1, $2, $3)
        `, group_name, user_id, course_id)
    }
}

module.exports = new GroupsModel()