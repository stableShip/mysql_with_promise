import db = require("./db");


var conn = db.getDbConn();

conn.queryAsync("select 1").then(rows => {
    console.log(rows);
})