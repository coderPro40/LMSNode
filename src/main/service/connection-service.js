var mysql = require('mysql');
var settings = {
    host: 'localhost',
    user: 'root',
    password: 'SoccerFootballer18',
    port: 3306,
    database: 'library'
};
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function (err) {
            if (!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase()