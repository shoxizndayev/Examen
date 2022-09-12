const { sign } = require('jsonwebtoken')

module.exports = (payload) => sign(payload, 'SECRET_KEY')