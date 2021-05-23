import mysql from 'mysql2';
import config from "../../config/index.js";
var MySQL = /** @class */ (function () {
    function MySQL(databaseName) {
        this.connection = mysql.createConnection({
            host: config.DB_HOST,
            user: config.DB_USER,
            password: config.DB_PASSWORD,
            database: databaseName
        });
    }
    MySQL.prototype.find = function (query) {
        this.connection.query("desc table");
        throw new Error("Method not implemented.");
    };
    MySQL.prototype.insert = function (data) {
        this.connection.query("desc table");
        throw new Error("Method not implemented.");
    };
    return MySQL;
}());
export { MySQL };
