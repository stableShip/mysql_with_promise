/// <reference path="./typings/tsd.d.ts" />
var mysql = require("mysql");
var Promise = require("bluebird");
Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
var path = require("path");
var DbHelper = (function () {
    function DbHelper() {
    }
    /**
     * 获取数据库的配置，通过全局配置类获取
     * @returns {{host: *, user: *, password: *, database: *}}
     */
    DbHelper.getDbConf = function () {
        try {
            var dir = path.resolve(".", "./configs/dbconfig.json");
            var cof = require(dir);
            return cof;
        }
        catch (e) {
            console.log(e);
        }
    };
    DbHelper.getDbConn = function () {
        var conn = mysql.createConnection(DbHelper.getDbConf());
        return conn;
    };
    //单例
    DbHelper.getInstance = function () {
        if (DbHelper.instance === null) {
            DbHelper.instance = new DbHelper();
        }
        return DbHelper.instance;
    };
    //单例对象
    DbHelper.instance = null;
    return DbHelper;
})();
module.exports = DbHelper;
//# sourceMappingURL=db.js.map