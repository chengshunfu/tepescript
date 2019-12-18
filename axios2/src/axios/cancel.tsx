
export class Cancel{
    message?:string;
    constructor(message:string){
        this.message = message;
    }
}
export interface Canceler {
    (message?: string): void;
  }
  
export interface CancelTokenSource {
    token: CancelToken;
    cancel: Canceler;
}
export interface CancelTokenStatic {
    source(): CancelTokenSource;
}
export function isCancel(error:any){
    return error instanceof Cancel;
}
export class CancelToken{
    public resolve:any;
    source(){
        return {
            token:new Promise((resolve,reject)=>{
                this.resolve = resolve
            }),
            cancel:(message:string)=>{
                this.resolve(new Cancel(message))
            }
        }
    }
}