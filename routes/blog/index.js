module.exports = function(router) {

    // index file
    router.get('/', function(req, res){
        res.render('index.ejs', {title: 'Express'});
    });

}
