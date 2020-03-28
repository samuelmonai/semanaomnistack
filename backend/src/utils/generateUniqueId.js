const crypto = require('crypto');

module.exports = function fugenerateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}