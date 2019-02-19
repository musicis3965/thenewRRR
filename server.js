//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate')

const app = express();
//mLab heroku stuff
// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
//                 replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
//
// var mongodbUri = 'mongodb://<dbuser>:<dbpassword>@ds335275.mlab.com:35275/heroku_b1fl7pfg';
//
//
// mongoose.connect(mongodbUri, options);
// var conn = mongoose.connection;
//
// conn.on('error', console.error.bind(console, 'connection error:'));
//
// conn.once('open', function() {
//   // Wait for the database connection to establish, then start the app.
// });
//mLab heroku stuff//mLab heroku stuff//mLab heroku stuff
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: "Our little secrett.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://test:test123@ds335275.mlab.com:35275/heroku_b1fl7pfg") || ("mongodb://localhost:27017/userDB", {useNewUrlParser: true});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema ({
  email: String,
  password: String,
  googleId: String,
  secret: String,
  secretValue: { type: Number, default: 1 },
  credit: { type: Number, default: 10 },
  date: { type: Number, default: 0 }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    // callbackURL: "http://localhost:3000/auth/google/secrets",
    callbackURL: "https://ridingretroradio.herokuapp.com/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile" ] })
);

app.get('/auth/google/secrets',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {

    res.redirect('/home2');
  });

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/secrets", function(req, res){
// goes through our db, picks out
//users where the secret field is $not equal to null
//------------------------TURN OFF SONG REQUESTS
// if (req.isAuthenticated()){
//   res.render("nosecrets");
// } else {
//   res.redirect("login");
// }
// });
//------------------------TURN ON SONG REQUESTS
  User.find({"secret": {$ne: null}}, function(err, foundUsers){
    if (err){
      console.log(err);
    } else {
      if (foundUsers) {
        res.render("secrets", {usersWithSecrets: foundUsers, credit: req.user.credit});
      }
    }
  });
});

app.get("/nosecrets", function(req, res){
  if (req.isAuthenticated()){
    res.render("nosecrets", {credit: req.user.credit});
  } else {
    res.redirect("login");
  }
});

app.get("/shoutoutSubmit", function(req, res){
  if (req.isAuthenticated()){
    res.render("shoutoutSubmit", {credit: req.user.credit});
  } else {
    res.redirect("login");
  }
});

app.get("/choppingBlock", function(req, res){
  if (req.isAuthenticated()){
    res.render("choppingBlock", {credit: req.user.credit});
  } else {
    res.redirect("login");
  }
});


app.post("/shoutoutSubmit", function(req, res){
  if (req.isAuthenticated()){
    res.render("shoutoutSubmit", {credit: req.user.credit});
  } else {
    res.redirect("login");
  }
});




app.get("/songrequests", function(req, res){
  if (req.isAuthenticated()){
    //-------------------TURN ON SONGREQUESTS HERE
    res.render("songrequests", {credit: req.user.credit});
    //-------------------TURN OFF SONGREQUESTS HERE
    // res.render("nosecrets");
  } else {
    res.redirect("login");
  }
});

app.get("/submit", function(req, res){
  if (req.isAuthenticated()){
    res.render("submit");
  } else {
    res.redirect("login");
  }
});

app.get("/home2", function(req, res){
  if (req.isAuthenticated()){
    res.render("home2", {credit: req.user.credit});

  } else {
    res.redirect("login");
  }
});



//in submit.ejs, around line 12 we have an input
// type="text". the name on this equals 'secret', which
// is what req.body.secret is referring to.
app.post("/submit", function(req, res){
  const submittedSecret = req.body.secret;

//req.user.id is the id that refers to the user in
// the database
  // console.log(req.user.id);

  User.findById(req.user.id, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        foundUser.save(function(){
          res.redirect("/secrets");
        });
      }
    }
  });
});

app.post("/songrequests", function(req, res){
  const submittedSecret = req.body.secret;

//req.user.id is the id that refers to the user in
// the database
  // console.log(req.user.id);

  User.findById(req.user.id, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        foundUser.save(function(){
          res.redirect("/songrequests");
        });
      }
    }
  });
});

app.post("/updateJustCredit", function(req, res){
console.log(req.user.id);

//req.user.id is the id that refers to the user in
// the database
  // console.log(req.user.id);

  User.findById(req.user.id, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.credit = req.body.credit;
        foundUser.save();
        res.send("okay");
      }
    }
  });
});

app.post("/updateValue", function(req, res){
console.log(req.user.id);

  User.findById(req.user.id, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secretValue = req.body.secretValue;
        foundUser.save();
        res.send("okay");
      }
    }
  });
});



app.post("/updateCredit", function(req, res){
console.log(req.user.id);

//req.user.id is the id that refers to the user in
// the database
  // console.log(req.user.id);

  User.findById(req.user.id, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.credit = req.body.credit;
        foundUser.date = parseInt(req.body.date);
        foundUser.save();
        res.send("okay");
      }
    }
  });
});

//add date when suer clicks, if seven days passes, enable button again. take date if its equal to 7, activate button

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});


app.post("/register", function(req, res){

  User.register({username: req.body.username}, req.body.password, function(err, user){
    if (err) {
      console.log(err);
      res.redirect("register");
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/home2");
      });
    }
  });

});

app.post("/login", function(req, res){
const user = new User({
  username: req.body.username,
  password: req.body.password
});

req.login(user, function(err){
  if(err) {
    console.log(err);
  } else {
    passport.authenticate("local")(req, res, function(){
      res.redirect("/home2");
    });
  }
});


});


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
