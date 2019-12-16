
namespace a{
    type SumFuntion=(a:number,b:number)=>number
    let sum:SumFuntion;
    function f1(a:number,b:number):number{
        return a
    }
    sum =f1;

    type Person = ()=>{name:string,age:number};
    let getPerson:Person;
    function g1(){
        return {name:'baiyan',age:10}
    }
    getPerson = g1

    type logFunc = (a:number|string)=>void;
    let log:logFunc;
    function log1(a:number|string|boolean){
        console.log(a)
    }
    log=log1
}

namespace b{
    interface WarningButton{
        class:'warning',
        text1:'修改'
    }
    interface DangerButton{
        class:'danger',
        text2:'删除'
    }
    type Button = WarningButton|DangerButton;
    function getButton(button:Button){
        if(button.class === 'warning'){
            button.text1
        }else{
            button.text2
        }
    }
}