const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("1")
        const userId = req.user.id
        const dir = `./uploads/${userId}`
        fs.exists(dir, exist => {
            if (!exist) {
                return fs.mkdir(dir, error => cb(error, dir))
            }
            return cb(null, dir)
        })
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const filefilter = (req, file, cb) => {
    if ((file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg')) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: filefilter
});

router.post('/upload', fetchuser, upload.single('image'), (req, res) => {
    // res.json({ "image": req.json() })
    res.json({ "message": "Success", "path": "http://localhost:5000" + "\\" + req.file.path });
    console.log(req.file);
    console.log();
    // console.log("\n", req.body);
});

module.exports = router