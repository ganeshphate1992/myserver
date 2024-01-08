var express = require('express')
var router = express.Router();
var { getStudentService, regStudentService } = require('../services/studentService')

// http://localhost:2020/std/reg-std, post
router.post("/reg-std", async function (req, res, next) {// req received
    try {
        const { data } = req.body
        console.log("reg-std controller")
        var result = await regStudentService(data);
        // take the data from the req
        console.log("controller receive result from service give it client as response")
        res.send(result)
    } catch (ex) {
        console.error(ex)
        res.send(ex.message)
    }
})


// http://localhost:2020/std/get-std, get
router.get("/get-std", async function (req, res, next) { // request received
    console.log("get-std controller")
    // take the data from req 
    var result = await getStudentService();
    res.send(result)
})


module.exports = router;