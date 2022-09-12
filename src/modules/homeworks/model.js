const PG = require('../../utils/postgres')

class HomeworkModel extends PG {
   addHomework() {
    return this.fetch(`
    insert into homeworks(title, user_id, group_id) values($1, 2$, 3$) returning *
    `, title, user_id, group_id)
   }

}

module.exports = new HomeworkModel()