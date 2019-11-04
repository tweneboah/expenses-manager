const express = require('express');
const userRoute = express.Router();
const User = require('../models/User');
const passport = require('passport');
//Register a User

userRoute.post('/api/user/register', (req, res) => {
    //Create an instance of a user
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    //This passport API, it will create the user and has it
    User.register(newUser, req.body.password, (err, user) => {
        console.log(req.session)
        if (err) {
            return res.status(200).json({
                success: false,
                isLoaded: false,
                error: err
            })
        } else {
            return res.status(200).json({
                success: true,
                isLoaded: true,
                user
            })
        }
    })
});


//LOGIN
userRoute.post('/api/user/login', passport.authenticate('local', {

}), (req, res) => {

    return res.json(req.user)


})

//CHECK IF USER IS LOGGEDIN
userRoute.get('/api/user', (req, res) => {
    if (!req.user) {
        return res.json('No user')
    } else {
        return res.json(req.user)
    }
});


//LOGOUT
userRoute.get('/api/user/logout', (req, res) => {
    req.logOut();
    return res.json('You successfully logout!!')
})

module.exports = userRoute;