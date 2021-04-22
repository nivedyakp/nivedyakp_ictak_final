const express = require('express');
const servicesRouter = express.Router();

var services = [
    {
        serviceName : 'Hair Color',
        serviceCode : '101',
        price : '3000',
        img : "1.jpeg"
    },
    {
        serviceName : 'Hair Cut',
        serviceCode : '102',
        price : '1000',
        img : "2.jpg"
    },
    {
        serviceName : 'Hair Treatment',
        serviceCode : '103',
        price : '5000',
        img : "3.jpg"
    },
    {
        serviceName : 'Manicure',
        serviceCode : '104',
        price : '1500',
        img : "4.jpg"
    },
    {
        serviceName : 'Pedicure',
        serviceCode : '105',
        price : '1500',
        img : "5.jpg"
    }
]

servicesRouter.get('/',function(req,res){
    res.render("services",{
        nav:[{link:'/login',name:'Log out'}],
        title:'Services',
        services
    });
});

servicesRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('service',{
        nav:[{link:'/login',name:'Log out'}],
        title:'Service',
        service: services[id] 
    });
});

module.exports = servicesRouter;