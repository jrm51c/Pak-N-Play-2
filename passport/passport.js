var passport = require('passport'),
    LocalStrategy   = require('passport-local').Strategy,
    User = require("../models/users");

passport.serializeUser(function(user, done){
  done(null, user._id);
  console.log(user._id)
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user);
  })
});

passport.use('local', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    } , 
    function(email, password, done) {
      console.log(email)
      console.log(password)
      User.findUser(email, password, function(err, user, msgs) {
        console.log(user + "what happens to the user")
        console.log(msgs)
        if (err) { 
          return done(err); 
        }
        return done(null, user);
      });
    }
  ));