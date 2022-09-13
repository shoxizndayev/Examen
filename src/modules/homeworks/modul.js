const model = require('./model')

class HomeworkController {
    async addHomework(req, res) {
        const { title, group_id } = req.body
        res.json(await model.addHomework( title, group_id ))
    }
}

module.exports = new HomeworkController()