namespace a{
    interface Fitch{
        name1:string
    }
    interface Watch{
        name2:string
    }
    interface Bird{
        name3:string
    }
    interface Sky{
        name4:string
    }
    //判断fitch的属性和泛型t的属性是不是一样的，如果是一样的那就继承这个watch接口
    type Condition<T> = T extends Fitch ? Watch:Bird;
    let condition:Condition<Fitch>={
        name2:'hello'
    }

    //获取函数返回的类型
    function getUserInfo(){
        return {name:'baiyan',age:28}
    }
    type UserInfo = ReturnType< typeof getUserInfo>;
    let user:UserInfo = {name:'baiyan',age:22};
}

namespace b{
    //instanceof 获取构造函数的类型
    class Person{
        name:string;
        constructor(name:string){
            this.name = name
        }
    }
    type P = InstanceType<typeof Person>;
    let p1:P = new Person('baiyan');
}