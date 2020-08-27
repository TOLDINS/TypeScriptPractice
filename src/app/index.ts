import express = require('express');
import {Request,Response,Application} from 'express';
import * as bodyParser from 'body-parser';

import mongoose=require('mongoose');
import { connect } from './connect';
import {routes} from './routes';
const app:Application= express();
const port=8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
routes({app});
app.get('/',(req:Request,res:Response)=>{
    res.send('Welcome');
})
app.listen(port,()=>{
    console.log('Server has been started!');
})
const db='mongodb+srv://denis:1111@cluster0.py4vh.mongodb.net/TYPESCIPTPRACTICE?retryWrites=true&w=majority'
connect({db});