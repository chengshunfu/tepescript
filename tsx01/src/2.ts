
namespace a{
    function createArray<T>(length: number, value: T): Array<T> {
        let result: Array<T> = [];
        for (let i = 0; i < length; i++) {
            result[i] = value
        }
        return result
    }
    
    let result = createArray<string>(3, 'x');
    console.log(result)
}

namespace b{
    function sum(...argus1:Array<any>):void{
        let argus:IArguments = arguments;
        for(let i=0;i<argus.length;i++){
            console.log(argus[i])
        }
    }
    sum(1,2,3)

    interface Last{
        <T>(a:T,b:T):T
    }
    let add:Last = function<T>(a:T,b:T):T{
        return a;
    }
    let result = add<number>(1,5);
}

namespace c{
    function swap<A,B>(types:[A,B]):[B,A]{
        return [types[1],types[0]]
    }
    let result = swap<string,number>(['baiyan',20])

    //全局数组接口的泛型
    interface Cart<T>{
        list:T[]
    }
    let add:Cart<string> = {
        list:['1']
    }
    //函数接口的泛型
    interface Fun{
        <T>(a:T,b:T):T
    }
    let render:Fun = function<T>(a:T,b:T):T{
        return a
    }
    let result2 = render<string>('1','2');

    interface Length{
        length:number
    }
    function logger<T extends Length>(val:T){
        console.log(val.length)
    }
    logger('baiyan')
}

namespace d{
    class myArray<T>{
        private list:T[]=[]
        add(value:T){
            this.list.push(value)
        }
        getMax():T{
            let result = this.list[0];
            for(let i=0;i<this.list.length;i++){
                if(this.list[i]>result){
                    result = this.list[i]
                }
            }
            return result
        }
    }
    let arr = new myArray<number>();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    let ret = arr.getMax();
    console.log(ret);
}

//定义接口泛型
namespace e{
    interface Last{
        <T>(a:T,b:T):T
    }
    let fn1:Last = function<T>(a:T,b:T):T{
        return a;
    }
    let result = fn1<number>(1,2);
}

//定义多个类型泛型
namespace f{
    function swap<A,B>(tuple:[A,B]):[B,A]{
        return[tuple[1],tuple[0]]
    }
    swap<number,string>([20,'baiyan'])
}

//当我们在使用泛型需要调用参数的内置实例方法的时候，就必须要对接口定义的方法进行约束定义
namespace j{
    interface Length{
        length:number
    }
    function logger<T extends Length>(val:T){
        console.log(val.length)
    }
    logger<string>('baiyan');
}
namespace h{
    // interface Cart<T>{
    //     list:T[]
    //   }
    //   let cart:Cart<{name:string,price:number}> = {
    //     list:[{name:'zhufeng',price:10}]
    //   }
    //   console.log(cart.list[0].name,cart.list[0].price);
    type Cart<T>={list:T[]}|T[];
    let c1:Cart<number> = {list:[1]};
    let c2:Cart<string> = ['string'];
}