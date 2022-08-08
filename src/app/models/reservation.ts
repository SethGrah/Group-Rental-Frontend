export class reservation{
    rId:number=0;
    car:string;
    user:any;
    rStart:Date;
    rEnd:Date;
    constructor(car:string,user:any,rStart:Date,rEnd:Date){
        this.car=car;
        this.user=user;
        this.rStart=rStart;
        this.rEnd=rEnd;
    }
}