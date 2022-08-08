import { Injectable } from "@angular/core";
import { user } from "./models/user";

@Injectable({
    providedIn: 'root'
})
export class UserFactory {
    u: user;
    constructor() {
       this.u = new user(0, '', 0, '', 'a@b.com'); 
    }

    public create() {
        return this.u;
    }

}