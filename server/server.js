const express = require ('express');
const cors = require('cors');
//NOTE: cors allows you to make requests outside of the server
const apiRouter= require('./routes');
// const jQuery= require('jquery');
const path = require('path');

let app = express();

app.use(cors());
app.use(express.json());
//NOTE: "app.use(express.json());" is the same as body.parser, it's just built in now
app.use('/', express.static(path.join(__dirname, '../client')))

app.use('/api', apiRouter);
// app.use(jQuery());

app.listen(3000);