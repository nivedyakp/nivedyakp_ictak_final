const express = require('express');
const loginRouter = express.Router();

var car = [
    {
        img : "salon.jpg"
    }
]

loginRouter.get('/',function(req,res){
    res.render("login",{
        homenav:[{link:'/admin',name:'Admin Login'},
        {link:'/login',name:'Login'},
        {link:'/signup',name:'Signup'}],
        title:'Login',
        car
    });
});

module.exports = loginRouter;
