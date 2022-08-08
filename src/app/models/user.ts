export class user {
    uID: number;
    name: String;
    phone: number;
    dob: String | null;
    email: String;

    constructor(uID: number, name: String, phone: number,
        dob: String, email: String) {
            this.uID = uID;
            this.name = name;
            this.phone = phone;
            this.dob = dob;
            this.email = email;
        }
}