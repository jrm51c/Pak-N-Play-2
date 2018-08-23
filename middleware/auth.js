module.exports.validateRequest = function(req, res, next){
    if(req.isAuthenticated()){
        next();
    } else {
        res.redirect("/login");
    }
}

//<!-- testing <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  //  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"> -->