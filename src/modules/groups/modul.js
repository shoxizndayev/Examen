const model = require('./model')

class GroupsController {
    async getGroups(_, res) {
        res.json(await model.getGroups())
    }

    async getGroupHomework(_, res) {
        res.json(await model.getGroupHomework())
    }

    async addGroup(req, res) {
        const { group_name, user_id, course_id } = req.body
        res.json(await model.addGroup( group_name, user_id, course_id ))
    }
}

module.exports = new GroupsController()