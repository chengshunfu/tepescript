"use strict";
var a;
(function (a) {
    var p = {
        name: 'baiyan',
        fly: function () { },
        eat: function () { }
    };
})(a || (a = {}));
//获取到对象值的类型然后定义，通过这个类型去约束其他的对象
var b;
(function (b) {
    // let p ={
    //     name:'baiyan',
    //     age:10
    // }
    // type Person = typeof p;
    // let p2:Person={
    //     name:'zhufeng',
    //     age:20
    // }
    var p1 = {
        name: 'baiyan',
        age: 10
    };
})(b || (b = {}));
var c;
(function (c) {
    var p = {
        name: 'baiyan'
    };
    var p1 = {
        name: 'danshi',
        age: 22,
        gender: 'male'
    };
    var p2 = {
        name: 'baiyan',
        age: 28,
        gender: 'male'
    };
    var p3 = {
        name: 'name'
    };
})(c || (c = {}));
