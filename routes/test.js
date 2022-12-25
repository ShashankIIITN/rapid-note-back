const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes');
const GetUser = require('../middleware/getuser');
const { findOne } = require('../models/Notes');
const ConnectToDatabase = require('../dbconnect');

//create-note : post
router.get('/test', async (req, res) => {

    res.status(200).send({test:ConnectToDatabase, msg:"its working"});
});


module.exports = router;