
export class reservationSearch{
    capacity:number|null;
    startDate:string|null;
    endDate:string|null;
    constructor(   capacity:number,
        startDate:string,
        endDate:string,){
            this.capacity=capacity;
            this.startDate=startDate;
            this.endDate=endDate;
        }
}