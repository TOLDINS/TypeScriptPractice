"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mongoose = require("mongoose");
exports.connect = function (_a) {
    var db = _a.db;
    var connect = function () {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(function () {
            return console.info('Db connected');
        }).catch(function (error) {
            return process.exit(1);
        });
    };
    connect();
    mongoose.connection.on('disconnected', connect);
};
