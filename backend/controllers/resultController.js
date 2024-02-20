// controllers/resultController.js
const pool = require('../index');

exports.views = (req, res) => {
    pool.query('SELECT * FROM result ORDER BY id ', (err, rows) => {
        if (!err) {
            let removedUser = req.query.removed;
            res.render('result', { rows, removedUser });
        } else {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
    });
}

// Implement other controller functions...
