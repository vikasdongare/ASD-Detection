const express = require('express');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const History = require('../models/History')
var fetchuser = require('../middleware/fetchuser');

router.post('/get', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const history = await History.find({ userid: userId })
        res.json({ history })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/create', fetchuser, [
    body("userid", 'Not a valid user').exists(),
    body('imagelink', 'Not a valid image').exists(),
    body('report', 'Not a valid report status').exists(),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userid, imagelink, report } = req.body;
    try {
        userId = req.user.id;
        // const authtoken = jwt.sign(userId, JWT_SECRET);

        if (userId != userid) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        let history = await History.create({
            userid, imagelink, report
        })
        success = true

        res.json({ success, history })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router