export class user {
    uID: number;
    name: String;
    phone: number;
    dob: Date;
    email: String;

    constructor(uID: number, name: String, phone: number,
        dob: Date, email: String) {
            this.uID = uID;
            this.name = name;
            this.phone = phone;
            this.dob = dob;
            this.email = email;
        }
}