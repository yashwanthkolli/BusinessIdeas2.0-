const router = require ('express').Router();
User = require('../model/user')

var passport       =require('passport'),
    LocalStrategy  =require("passport-local"),
    methodOverride =require("method-override")
    bodyParser     =require("body-parser"),

//Register routes
router.get("/register",function(req,res){
    res.render("register");
})
router.post("/register",function(req,res){
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){/*here User model using passport, creates new user taking in his username 
        and hashing the password, the callback checks for error and authenicates the user in the website*/
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/");
        })
    })
})


//Login routes
router.get("/login",function(req,res){
    res.render("login");
})
//once the login button is pressed the form(check login page) is linked to this route and the passport.authenticate() checks the users credentials and redirects 
router.post("/login",passport.authenticate('local',{
    successRedirect:"/",
    failureRedirect:"/login"
}),function(req,res){})

//Company updation(Ignore if not necessary)
router.put("/company",function(req,res){
    var usercompany=req.body.company
    var id=req.user._id
    User.findByIdAndUpdate(id,{company:req.body.company},function(err,founduser){
        if(err){
            console.log(err)
        }/*
        else{
            
            founduser.update({usercompany})
            
            console.log(founduser.company)
            res.redirect("/")
        }*/
        res.redirect("/")
    })

})


//logout route
router.get("/logout",function(req,res){
    req.logout()
    res.redirect("/home")
})
//this is the middleware ,this is very important...it keeps unauthorised ppl(those who havent logged in) from accessing the quiz page using routes..
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())  // <-- typo here
        return next();
    res.redirect('/login');
}

module.exports=router;