const express = require('express');
const adminRouter = express.Router();

var car = [
    {
        img : "salon.jpg"
    }
]

adminRouter.get('/',function(req,res){
    res.render("adminlogin",{
        homenav:[{link:'/admin',name:'Admin Login'},
        {link:'/login',name:'Login'},
        {link:'/signup',name:'Signup'}],
        title:'Admin Login',
        car
    });
});

module.exports = adminRouter;
