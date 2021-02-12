const jwt = require('jsonwebtoken');
const config = require('config');

// token is stored at config/default.json  but not added in git

module.exports = function ( req, res, next){
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({ msg: 'No Token , authorization denied'});
    }

    // verify token
    try {
        const decrypt = jwt.verify(token,config.get('jwtSecret'));
        req.user = decrypt.user;
        next()
    }catch(err){
        res.status(401).json({ msg: 'Token is not valid' });
    }
}