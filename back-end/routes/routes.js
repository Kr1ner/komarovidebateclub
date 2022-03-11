const express = require("express");
const signUpTemplateCopy = require("../models/signUpModels")
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/signup" , async (req,res) => {

    const saltPassword = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(req.body.password, saltPassword);

    const signedUpUser = new signUpTemplateCopy({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: securedPassword
    })
    if(!req.body.email || !req.body.username || !req.body.name || !req.body.password) {
        return res.status(422).json({error:"Fill all data"});
    }
    signedUpUser.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
})

module.exports = router;