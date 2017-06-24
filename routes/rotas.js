module.exports = function(app){

    app.get('/pessoa-juridica/cadastro',function(req,res){
        res.render("pessoa-juridica.ejs");
    });

    app.get('/pessoa/cadastro',function(req,res){
        res.render("pessoa.ejs");
    });
    
    app.get('/solicitacao',function(req,res){
        res.render("solicitacao.ejs");
    });
    
    app.get('/login',function(req,res){
        res.render("login.ejs");
    });
    

    app.get('/home',function(req,res){
        res.render("home.ejs");
    });
    

    app.get('/',function(req,res){
        res.render("home.ejs");
    });
    

}