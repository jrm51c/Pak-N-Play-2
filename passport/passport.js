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

  /* var connection = mysql.createConnection({

    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "paknplay_db"
}); */