const express = require('express');
const router = express.Router()
const User = require('../models/User');
var fetchuser = require('../middleware/fetchuser');


// ROUTE 3: Get loggedin User Details using: POST "/profile/getuser". Login required
router.get('/getuser', fetchuser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

router.put('/update', fetchuser, async (req,res)=>{
    const {name, dob, mobileno, address} = req.body
    let success = true
    try {
        const updatedUser = {}
        if(name) { updatedUser.name = name}
        if(dob) { updatedUser.dob = dob}
        if(mobileno) { updatedUser.mobileno = mobileno}
        if(address) { updatedUser.address = address}
        
        userId = req.user.id;
        // const user = await User.findById(userId).select("-password")
        let updated = await User.findByIdAndUpdate(userId, { $set: updatedUser}, {new: true})
        res.json({success, updated})
      } catch (error) {
        console.error(error.message);
        res.status(500).json({success, "error":"Internal Server Error"});
      }
})

module.exports = router