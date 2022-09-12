const PG = require('../../utils/postgres')


class CourseModel extends PG {
    getCourses() {
        return this.fetch('select * from courses')
    }

    getCourseGroups() {
        return this.fetch(`
        select c.id, c.course_name, c.duration, json_agg(g.*) as groups
        from courses as c
        inner join groups as g
        on g.course_id = c.id
        group by c.id, c.course_name, c.duration;
        `)
    }

    addCourse() {
        return this.fetch(`
        insert into courses(course_name, description, price, duration) values($1, $2, $3, $4)
        `, course_name, description, price, duration)
    }
}

module.exports = new CourseModel()