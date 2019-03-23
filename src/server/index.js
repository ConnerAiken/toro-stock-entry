import express from 'express';
import utils from "./helpers/utils.js";
import path from "path";
import dotenv from "dotenv";
import Db from "./helpers/db";

const iex = require('iexcloud_api_wrapper'); 

global.path = path;
global.dotenv = dotenv;

utils.loadENV();
const app = express();
const db = new Db(); 

app.use(express.static(path.resolve(process.cwd(), 'public')))

app.get('/stock', (req, res) => {
    var symbol = req.param('symbol');

    try {
        iex.company(symbol)
            .then(() => db.query('insert into target_companies (symbol) VALUES($1) ON CONFLICT DO NOTHING', [symbol]))
            .then(result => res.send("OK"));
    }catch(e) {

    }
});

app.listen(process.env.PORT, () => {
    utils.log(`Server has started and is listening on port ${process.env.PORT}!`)
});