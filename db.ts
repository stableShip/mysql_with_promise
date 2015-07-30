/// <reference path="./typings/tsd.d.ts" />
import mysql = require("mysql");
import _ = require("underscore");
import Promise = require("bluebird");
Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype)
import path = require("path");
class DbHelper {
    //单例对象
    private static instance: DbHelper = null;

    /**
     * 获取数据库的配置，通过全局配置类获取
     * @returns {{host: *, user: *, password: *, database: *}}
     */
    private static getDbConf(): any {
        try {
            var dir = path.resolve(".", "./configs/dbconfig.json");
            var cof = require(dir);
            return cof;
        } catch (e) {
            console.log(e);
        }
    }




    public static getDbConn(): any {
        var conn = mysql.createConnection(DbHelper.getDbConf());
        return conn;
    }

    //单例
    private static getInstance(): DbHelper {
        if (DbHelper.instance === null) {
            DbHelper.instance = new DbHelper();
        }
        return DbHelper.instance;
    }
}

export =DbHelper;