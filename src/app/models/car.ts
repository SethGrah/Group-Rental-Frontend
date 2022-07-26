export class Car{
     license:string;
     capacity:number;
     make:string;
     model:string;
     year:number;

     constructor(license:string,capacity:number,make:string,model:string,year:number){
        this.license=license;
        this.capacity=capacity;
        this.make=make;
        this.model=model;
        this.year=year;
     }

}