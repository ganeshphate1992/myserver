var jwt = require('jsonwebtoken')

function validateToken(req, res, next) {
    var token = req.headers.authorization
    if (token) {
        jwt.verify(token, "appToken", function (e) {
            if (e) {
                res.send("Invalid token")
            } else {
                next();
            }
        })
    } else {
        res.send("token missing")
    }

}
module.exports = validateToken