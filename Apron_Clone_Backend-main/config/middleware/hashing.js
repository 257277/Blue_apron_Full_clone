const bcrypt = require('bcrypt');


const hashing = async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (hash) {
            req.body.password = hash;
            next();
        }
    });
}

module.exports = {
    hashing
}