const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obj = {
        name: "Notes",
        lname: "lastname"
    }
    res.send(obj);
})

module.exports = router;