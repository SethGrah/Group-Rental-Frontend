export class updateRes{
    rId:number=0;
    car:string;
    user:any;
    rStart:string|null;
    rEnd:string|null;
    constructor(rId:number,car:string,user:any,rStart:string,rEnd:string){
        this.rId=rId;
        this.car=car;
        this.user=user;
        this.rStart=rStart;
        this.rEnd=rEnd;
    }
}