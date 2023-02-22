export interface Food {
    name: string;
    image: string;
    price: number;
    description: string;
}


export const BreakFast : Food[] =[
    {name: 'Eggs Benedict', price: 8.99,image: '../assets/breakfast1.png',description:'Eggs and Bacon'},
    {name: 'Breakfast Sandwich', price: 9.99 ,image: '../assets/breakfast2.png',description:'with a side of fruit'},
    {name: 'Baked Chiken', price: 10.99,image: '../assets/breakfast3.png',description:'Baked turkey on bread'},
    {name: 'Bagel and cream cheese', price: 23.99,image: '../assets/breakfast4.png',description:'Authentic Italian cheese'},
    {name: 'Fried Egg Toast Brunch', price: 3.99, image: '../assets/breakfast5.png',description:'Baisc breakfast'},
    {name: 'Toast Croissant Fried Egg', price: 19.99,image: '../assets/breakfast6.png',description:'bon appetit'}
]

export const Lunch: Food[] = [
    {name: 'Beef Steak', price: 8.99,image: '../assets/lunch1.png',description:'Eggs and Bacon'},
    {name: 'Honey with Peppers', price: 9.99 ,image: '../assets/lunch2.png',description:'with a side of fruit'},
    {name: 'Tarrgaon Rubbed Salmon', price: 10.99,image: '../assets/lunch3.png',description:'Baked turkey on bread'},
    {name: 'Indian Lunch', price: 23.99,image: '../assets/lunch4.png',description:'Authentic Italian cheese'},
    {name: 'Fried Chicken Bento', price: 3.99, image: '../assets/lunch5.png',description:'Baisc breakfast'},
    {name: 'healthy Meal Plan', price: 19.99,image: '../assets/lunch6.png',description:'bon appetit'}
]

export const Dinner: Food[] = [
    {name: 'Baked Chicken', price: 8.99,image: '../assets/dinner1.png',description:'Eggs and Bacon'},
    {name: 'Lemony Salmaon Piccata', price: 9.99 ,image: '../assets/dinner2.png',description:'with a side of fruit'},
    {name: 'Garlic Butter Baked Salmon', price: 10.99,image: '../assets/dinner3.png',description:'Baked turkey on bread'},
    {name: 'French Fried with Cheese', price: 23.99,image: '../assets/dinner4.png',description:'Authentic Italian cheese'},
    {name: 'Beef Tenderion', price: 3.99, image: '../assets/dinner5.png',description:'Baisc breakfast'},
    {name: 'Lentil Salad', price: 19.99,image: '../assets/dinner6.png',description:'bon appetit'}
]