const { verify, JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const { access_token } = req.headers

    if(!access_token) {
        return res.json("Uka qani")
    }

    verify(access_token, 'SECRET_KEY', (err, decode) => {
        if(err instanceof JsonWebTokenError) {
            return res.json("Invalid")
        }

        if(err instanceof TokenExpiredError) {
            return res.json("Time is gone")
        } 

        req.verify = decode.id

        next()
    })
}