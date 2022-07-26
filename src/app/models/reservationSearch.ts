export class reservationSearch{
    size:number;
    startDate:Date;
    endDate:Date;
    constructor(   size:number,
        startDate:Date,
        endDate:Date,){
            this.size=size;
            this.startDate=startDate;
            this.endDate=endDate;
        }
}