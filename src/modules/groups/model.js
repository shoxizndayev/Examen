const PG = require('../../utils/postgres')

class GroupsModel extends PG {
    getGroups() {
        return this.fetch(`select * from groups`)
    }

    getGroupHomework() {
        return this.fetch(`
        select
        g.group_name, g.id, json_agg(h.*) as homeworks
        from groups as g
        inner join 
            homeworks as h
        on h.group_id = g.id
        group by g.group_name, g.id;
        `)
    }

    addGroup() {
        return this.fetch(`
        insert into groups(group_name, user_id, course_id) values($1, $2, $3)
        `, group_name, user_id, course_id)
    }
}

module.exports = new GroupsModel()