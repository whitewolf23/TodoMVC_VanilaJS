(function(){
    'use strict';
    function App(){
        console.log('App created!');
        var dbname = "todos";
        this.storage = new app.Storage(dbname);
        this.model = new app.Model(this.storage);
        this.template = new app.Template();
        this.view = new app.View(this.template);
        this.controller = new app.Controller(this.model, this.view);
    }
    var todo = new App();
})();
