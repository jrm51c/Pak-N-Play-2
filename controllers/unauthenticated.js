var passport = require("passport"),
    User = require("../models/users");


module.exports = function (app, jwt) {
    app.get("/login", function(req, res){
        res.render("login");
    });

    app.post('/login', 
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })
    );

    app.post('/register', function (req, res) {
        User.createAccount(req.body, function (err, account) {
            if (err) throw (err);
            res.redirect("/");
        });
    });

    app.get('/logout', function (req, res) {
        req.logout();
        req.flash('success message', "You are now logged out")
        res.redirect('/');
    });
}

//<!-- testing <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  //  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"> -->