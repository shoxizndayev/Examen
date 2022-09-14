const PG = require('../../utils/postgres')

class HomeworkModel extends PG {
   addHomework(title, group_id) {
    return this.fetch(`
    insert into homeworks(title, group_id) values($1, $2) returning *
    `, title, group_id)
   }

}

module.exports = new HomeworkModel()
