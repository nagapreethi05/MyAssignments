//import env from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
// const express = require('express')
// const mongoose = require('mongoose')
// const url = 'mongodb://localhost/books'
//env.config();
// const url=`mongodb+srv://${process.env.user}:${process.env.Preethi123}@${process.env.server}/Sub?retryWrites=true&w=majority`;
const url = "mongodb+srv://NagaPreethi:Preethi123@merncluster.z6xba.mongodb.net/Sub?retryWrites=true&w=majority";
const app = express()

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const bookRouter = require('./books')
app.use('/books',bookRouter)

app.listen(9000, () => {
    console.log('Server started:9000')
})