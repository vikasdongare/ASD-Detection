const express = require('express');
const router = express.Router()

router.get('/', (req,res)=>{
    res.json({"api":"report"})
})

module.exports = router