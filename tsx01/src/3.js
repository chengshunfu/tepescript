"use strict";
var a;
(function (a_1) {
    var sum;
    function f1(a, b) {
        return a;
    }
    sum = f1;
    var getPerson;
    function g1() {
        return { name: 'baiyan', age: 10 };
    }
    getPerson = g1;
    var log;
    function log1(a) {
        console.log(a);
    }
    log = log1;
})(a || (a = {}));
var b;
(function (b) {
    function getButton(button) {
        if (button.class === 'warning') {
            button.text1;
        }
        else {
            button.text2;
        }
    }
})(b || (b = {}));
