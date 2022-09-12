const { Pool } = require('pg')
const {connection: { connectionString } } = require('../config')


const pool = new Pool ({ connectionString })


class PG {
    #pool = pool

    async #fetchData(SQL, ...params) {
        const client = await this.#pool.connect()
        try {
            const { rows } = await client.query(SQL, params.length ? params : null)
            return rows
        } finally {
            client.release()
        }
    }

    get fetch() {
        return this.#fetchData
    }
}

module.exports = PG