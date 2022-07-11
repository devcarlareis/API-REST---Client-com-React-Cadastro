const express = require("express");
const compression = require("compression");
const cors = require("cors");
const db = require('../src/shared/conectiondb')
const dotenv = require("dotenv");

dotenv.config(); 
const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/check', ({ res }) => res.send('OK'));

app.listen(process.env.PORT)