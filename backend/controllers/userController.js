const express = require("express");
const Users = require("../models/users")
router = express.Router();

router.post('/register', async (req, res) =>{
    const payload = req.body
    try {
        const users = new Users(payload)
        await users.save()
        res.status(201).send("Register success").end()
      } catch (error) {
        res.status(400).json(error)
      }
})
router.post('/login', async (req, res) => {
    const payload = req.body
    try{
    const users = await Users.find({})
    const result = users.forEach(user =>{
        if((user.email == payload.email) && (user.password == payload.password)){
            res.status(200).send("Login is correct").end()
        }
    })
    if(result == undefined){
        res.status(301).send("Login is incorrect").end()
    }

    }catch(error){
        res.status(400).json(error)
    }

})

module.exports = router;