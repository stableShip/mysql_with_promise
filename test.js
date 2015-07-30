var db = require("./db");
var conn = db.getDbConn();
conn.queryAsync("select 1").then(function (rows) {
    console.log(rows);
});
//# sourceMappingURL=test.js.map