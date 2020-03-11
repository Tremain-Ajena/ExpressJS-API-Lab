const express = require('express');
const chirpsRouter= require('./chirps');
// const usersRouter= require('./users');
// const jQuery= require('jquery');



let router= express.Router();

router.use('/chirps',chirpsRouter);
// NOTE: "router.use()" is middleware
// router.use('/users',usersRouter);
// router.use('/')

module.exports = router;