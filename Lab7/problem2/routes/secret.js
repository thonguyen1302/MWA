const express = require('express');
const crypto = require('crypto');
const router = express.Router();

const decipher = crypto.createDecipher('aes256', 'asaadsaad');

/* GET users listing. */
router.get('/', function (req, res, next) {
    const db = req.db;

    db.homework7.findOne({}, {_id: 0}, function (err, data) {

        let decrypted = '';
        decipher.on('readable', () => {
            const data = decipher.read();
            if (data) {
                decrypted += data.toString('utf8');
            }
        });
        decipher.on('end', () => {
            res.send(decrypted);
        });

        decipher.write(data.message, 'hex');
        decipher.end();

    });
});

module.exports = router;
