var express = require("express"),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 5001;

    var json = {name: 'john', age: 22, height: 'foot'};


app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.get("/test", function(req, res) {
  res.send(json);
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.use(app.router);
});

app.listen(port);
