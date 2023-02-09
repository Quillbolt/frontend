import { Customer } from "./customer.interface";

export interface Ticket {
    checkin_date: Date ;
    customer : Customer;
    Create : Date;
    Price : number;
}

