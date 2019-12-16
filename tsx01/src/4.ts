namespace a{
    interface Bird{
        name:string,
        fly():void
    }
    interface Person{
        name:string,
        eat():void
    }
    //这两个接口必须要同时具备
    type BirMad = Bird&Person;
    let p:BirMad={
        name:'baiyan',
        fly(){},
        eat(){}
    }  
}

//获取到对象值的类型然后定义，通过这个类型去约束其他的对象
namespace b{
    // let p ={
    //     name:'baiyan',
    //     age:10
    // }
    // type Person = typeof p;
    // let p2:Person={
    //     name:'zhufeng',
    //     age:20
    // }


    type plainPerson = {
        [key in keyof Person]?:Person[key]
    }
    let p1:plainPerson={
        name:'baiyan',
        age:10
    }
}

namespace c{
    interface Person{
        name:string,
        age:number,
        gender:'male'|'femle'
    }
    type Partial<T> ={
        [key in keyof T]?:T[key]
    }
    type partialPerson = Partial<Person>
    let p:partialPerson = {
        name:'baiyan'
    }
    type Require<T>={
        [key in keyof T]-?:T[key]
    }
    type RequirePerson = Require<Person>;
    let p1:RequirePerson = {
        name:'danshi',
        age:22,
        gender:'male'
    }
    type ReadOnly<T> = {
        readonly [key in keyof T]:T[key]
    }
    type ReadOnlyPerson = ReadOnly<Person>;
    let p2:ReadOnlyPerson={
        name:'baiyan',
        age:28,
        gender:'male'
    }
    //K extends keyof T 意思是K继承T并且迭代T，就是取出T内部所有的key属性值
    //迭代K，并且取出对应的T的key属性；
    type Pick<T,K extends keyof T>={
        [key in K]:T[key]
    }
    //取出Person中的name这个属性定义一个新的类型，这个类型只要name一个属性
    type PickPerson = Pick<Person,'name'>
    let p3:PickPerson = {
        name:'name'
    }
}