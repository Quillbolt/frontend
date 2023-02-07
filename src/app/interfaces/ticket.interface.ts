import { Customer } from "./customer.interface";

export interface Ticket {
    id :string;
    userid: Customer;
    create_on : Date;
    checkin : Date;
    sha_256 : string;
    pass : string;
}

