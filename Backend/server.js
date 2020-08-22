const express = require('express');
const app = express();
const cors = require('cors');
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const { urlencoded } = require('body-parser');
const User = require('./model/user') 


var passport       =require('passport'),
    LocalStrategy  =require("passport-local"),
    methodOverride =require("method-override"),
    bodyParser     =require("body-parser")


app.use(require("express-session")({ //This creates a session for every user logged in(No changes required here.)
    secret:"This is a secret",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//ENV-CONFIGURATION
dotenv.config();
const port = process.env.PORT || 5000;


//MONGODB CONNECTION
mongoose.connect(process.env.ATLAS_USER, {useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', () => { console.log("MongoDB database connection established successfully"); });


//MIDDLEWARE
app.use(express.json());
app.use(cors());


//ROUTES
const authRoute = require('./routes/user');
app.use('/user',authRoute);

const companyRoute = require('./routes/company');
app.use('/company',companyRoute);

const LnTRoute = require('./routes/LnT');
app.use('/lnt',LnTRoute);

const RelianceRoute = require('./routes/Reliance');
app.use('/reliance',RelianceRoute);

const SonyRoute = require('./routes/Sony');
app.use('/sony',SonyRoute);

const TataRoute = require('./routes/Tata');
app.use('/tata',TataRoute);


//PORT CONNECTION
app.listen( port, ()=> console.log(`Server is connected in port ${port}`));