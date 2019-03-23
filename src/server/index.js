import express from 'express';
import utils from "./helpers/utils.js";
import path from "path";
import dotenv from "dotenv";

global.path = path;
global.dotenv = dotenv;

utils.loadENV();
const app = express();

app.use(express.static(path.resolve(process.cwd(), 'public')))

app.get('/stock', (req, res) => {
    console.log(req);
});

app.listen(process.env.PORT, () => {
    utils.log(`Server has started and is listening on port ${process.env.PORT}!`)
});