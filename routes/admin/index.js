module.exports = function(router) {

    // login
    router.get('/login', function(req, res){
        res.render('auth/login.ejs')
    });

    // index
    router.get('/index', function(req, res){
        res.render('auth/index.ejs')
    });
}
