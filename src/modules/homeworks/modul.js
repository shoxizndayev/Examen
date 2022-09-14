const model = require('./model')

class HomeworkController {
    async addHomework(req, res) {
        const { title } = req.body
        const { id } = req.params
        let homwork =  await model.addHomework( title, id )
        console.log(homwork)

        if(homwork.length == 0) {
            res.json({
                status: 400,
                message: 'kelmadi'
            })
        }

        res.status(201).json({
            status: 201,
            message: 'keldi',
            data: homwork
        })

    }
}

module.exports = new HomeworkController()




