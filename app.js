const express = require('express');
const app = express();
const servicesRouter = require('./src/routes/serviceRoutes');
const addserviceRouter = require('./src/routes/addserviceRoutes');
const adminRouter = require('./src/routes/adminRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/admin',adminRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/services',servicesRouter);
app.use('/addservice',addserviceRouter);

var car = [
    {
        img : "salon.jpg"
    },
    {
        img : "C1.jpg"
    },
    {
        img : "C2.jpg"
    },
    {
        img : "C3.jpg"
    }
]

app.get('/',function(req,res){
    res.render("index",
    {
        homenav:[{link:'/admin',name:'Admin Login'},
        {link:'/login',name:'Login'},
        {link:'/signup',name:'Signup'}],
        title:'Skin_ly',
        car
    });
});


app.listen(5000);