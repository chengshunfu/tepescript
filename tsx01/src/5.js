"use strict";
var a;
(function (a) {
    var condition = {
        name2: 'hello'
    };
    //获取函数返回的类型
    function getUserInfo() {
        return { name: 'baiyan', age: 28 };
    }
    var user = { name: 'baiyan', age: 22 };
})(a || (a = {}));
var b;
(function (b) {
    //instanceof 获取构造函数的类型
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var p1 = new Person('baiyan');
})(b || (b = {}));
