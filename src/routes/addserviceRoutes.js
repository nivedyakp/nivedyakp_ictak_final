const express = require('express');
const addserviceRouter = express.Router();

addserviceRouter.get('/',function(req,res){
    res.render("addservice",{
        addnav:[{link:'/services',name:'Logout'}],
        title:'Add Service'
    });
});

addserviceRouter.get('/add',function(req,res){
    res.render("Service Added");
})

module.exports = addserviceRouter;
