export interface Customer {
    firstname:string;
    lastname : string;
    email: string;
    tel : string;
    cardetail:{
        cardnumber:string;
        expirydate:Date;
        CVC:string;
    };
    country:string;
    zipcode:string;
}
