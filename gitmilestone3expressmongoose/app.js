"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import env from 'dotenv';
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
// const express = require('express')
// const mongoose = require('mongoose')
// const url = 'mongodb://localhost/books'
//env.config();
// const url=`mongodb+srv://${process.env.user}:${process.env.Preethi123}@${process.env.server}/Sub?retryWrites=true&w=majority`;
var url = "mongodb+srv://NagaPreethi:Preethi123@merncluster.z6xba.mongodb.net/Sub?retryWrites=true&w=majority";
var app = express_1.default();
mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var con = mongoose_1.default.connection;
con.on('open', function () {
    console.log('connected...');
});
app.use(express_1.default.json());
var bookRouter = require('./books');
app.use('/books', bookRouter);
app.listen(9000, function () {
    console.log('Server started:9000');
});
