const jwt = require('../../utils/jwt')
const model = require('./model')

class UserController {
    async LoginUser(req, res) {
           try {
            const { username, password} = req.body

            const user = await model.LoginUser(username, password)

            console.log(username, password)

            if(user.length==0) {
                return res.sendStatus(401)
            }

            

            res.json({
                message: "Authorized",
                access_token: jwt({id: user.id}),
                role: user[0].role
            })
           } catch(err) {
            console.log(err.massage)
           }
    }

    async getUsersStudents(_, res) {
        res.json(await model.getUsersStudents())
    }
    
    async getUsersTeachers(_, res) {
        res.json(await model.getUsersTeachers())
    }

    async getTeacherGroups(_, res) {
        res.json(await model.getTeacherGroups())
    }

    async getStudentGroups(_, res) {
        res.json(await model.getStudentGroups())
    }
    
    async newUser(req, res) {
        const { name, surname, username, password, phone_number, course, role } = req.body
        res.json(await model.newUser(name, surname, username, password, phone_number, course, role))
    }

    async deleteUser(req, res) {
        const { id } = req.params
        res.json(await model.deleteUser(id))
    }
}

module.exports = new UserController()