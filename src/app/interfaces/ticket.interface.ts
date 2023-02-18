import { Customer } from "./customer.interface";

export interface Ticket {
    name: string;
    prices: number;
    quantity: number;
}

export interface ticket_range{
    name: string;
    prices  : number;
    benefit: string
}

export const  TICKET: ticket_range[] =[
    { name: "Adults'",prices: 39, benefit:'' },
    { name: "Vip",prices: 89,benefit:'' }

]