var mysql = require('mysql')
function connectDB(sql) {
  return new Promise((resolve, reject) => {
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'node_test',
      password: 'node_test',
      database: 'node_test'
    })
    connection.connect()
    connection.query(sql, function (err, rows, fields) {
      if (err) return reject(err)
      resolve(rows)
    })
    connection.end()
  })

}

module.exports = connectDB


