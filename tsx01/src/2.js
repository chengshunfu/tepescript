"use strict";
var a;
(function (a) {
    function createArray(length, value) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    var result = createArray(3, 'x');
    console.log(result);
})(a || (a = {}));
var b;
(function (b_1) {
    function sum() {
        var argus1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argus1[_i] = arguments[_i];
        }
        var argus = arguments;
        for (var i = 0; i < argus.length; i++) {
            console.log(argus[i]);
        }
    }
    sum(1, 2, 3);
    var add = function (a, b) {
        return a;
    };
    var result = add(1, 5);
})(b || (b = {}));
var c;
(function (c) {
    function swap(types) {
        return [types[1], types[0]];
    }
    var result = swap(['baiyan', 20]);
    var add = {
        list: ['1']
    };
    var render = function (a, b) {
        return a;
    };
    var result2 = render('1', '2');
    function logger(val) {
        console.log(val.length);
    }
    logger('baiyan');
})(c || (c = {}));
var d;
(function (d) {
    var myArray = /** @class */ (function () {
        function myArray() {
            this.list = [];
        }
        myArray.prototype.add = function (value) {
            this.list.push(value);
        };
        myArray.prototype.getMax = function () {
            var result = this.list[0];
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] > result) {
                    result = this.list[i];
                }
            }
            return result;
        };
        return myArray;
    }());
    var arr = new myArray();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    var ret = arr.getMax();
    console.log(ret);
})(d || (d = {}));
//定义接口泛型
var e;
(function (e) {
    var fn1 = function (a, b) {
        return a;
    };
    var result = fn1(1, 2);
})(e || (e = {}));
//定义多个类型泛型
var f;
(function (f) {
    function swap(tuple) {
        return [tuple[1], tuple[0]];
    }
    swap([20, 'baiyan']);
})(f || (f = {}));
//当我们在使用泛型需要调用参数的内置实例方法的时候，就必须要对接口定义的方法进行约束定义
var j;
(function (j) {
    function logger(val) {
        console.log(val.length);
    }
    logger('baiyan');
})(j || (j = {}));
var h;
(function (h) {
    var c1 = { list: [1] };
    var c2 = ['string'];
})(h || (h = {}));
