import { Customer } from "./customer.interface";

export interface Ticket {
    name: string;
    prices: number;
    quantity: number;
}

export interface ticket_range{
    name: string;
    prices  : number;
    benefit: benefit;
}

export interface benefit{
    b1: string;
    b2: string;
}

export const  TICKET: ticket_range[] =[
    { name: "BASIC",prices: 39,
     benefit: {
        b1: "Individuals have acess to all available rides across the park",
        b2: "Free refill drinks and parking available"
     }},
    { name: "VIP",prices: 89,
    benefit:{
        b1:"All benefit from Basic tier",
        b2:"plus additional benefit secret for you",
    } }

]