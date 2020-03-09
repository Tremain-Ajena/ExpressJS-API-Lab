const express = require ('express');
const cors = require('cors');
// cors allows you to make requests outside of the server
const apiRouter= require('./routes');

let app = express();

app.use(cors());
app.use(express.json());
// "app.use(express.json());" is the same as body.parser, it's just built in now

app.use('/api', apiRouter)

app.listen(3000);