//middleware to ensure user is logged in before accessing route handlers
function ensureLoggedIn(req, res, next) {
    if(req.session.user){
        next();
        return;
    }

    res.redirect("/account/register");
}

function ensureLogOut(req, res, next){
    if(!req.session.user){
        next();
        return;
    }
    res.redirect("/");
}

module.exports = {
    ensureLoggedIn,
    ensureLogOut
}