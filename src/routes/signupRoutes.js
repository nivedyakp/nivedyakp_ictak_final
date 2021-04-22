const express = require('express');
const signupRouter = express.Router();

var car = [
    {
        img : "salon.jpg"
    }
]

signupRouter.get('/',function(req,res){
    res.render("signup",{
        homenav:[{link:'/admin',name:'Admin Login'},
        {link:'/login',name:'Login'},
        {link:'/signup',name:'Signup'}],
        title:'Signup'
    });
});

module.exports = signupRouter;
