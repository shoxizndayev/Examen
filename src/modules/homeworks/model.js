const PG = require('../../utils/postgres')

class HomeworkModel extends PG {
   addHomework() {
    return this.fetch(`
    insert into homeworks(title, group_id) values($1, 3$) returning *
    `, title, group_id)
   }

}

module.exports = new HomeworkModel()