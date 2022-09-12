const model = require('./model')

class CourseControl {
    async getCourses(_, res) {
        res.json(await model.getCourses())
    }

    async getCourseGroups(_,res) {
        res.json(await model.getCourseGroups())
    }

    async addCourse(req, res) {
        const { course_name, description, price, duration } = req.body
        res.json(await model.addCourse( course_name, description, price, duration ))
    }
}


module.exports = new CourseControl()