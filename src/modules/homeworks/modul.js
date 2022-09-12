const model = require('./model')

class HomeworkController {
    async addHomework(req, res) {
        const { title, user_id, group_id } = req.body
        res.json(await model.addHomework( title, user_id, group_id ))
    }
}

module.exports = new HomeworkController()