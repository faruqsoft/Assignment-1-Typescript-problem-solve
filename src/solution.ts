
function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }else if( typeof value === "number"){
        return value*10
    }else{
        return !value
    }
}




function getLength (value : string | any[]) : number{
    if(typeof value === "string"){
        return value.length
    }else if (Array.isArray(value)){
        return value.length
    }else {
        return 0
    }    
}



class Person {
    name : string;
    age : number;

    constructor (name : string, age : number){
        this.name = name;
        this.age = age;
    }
    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}';`;
    }
}

const person1 = new Person('John Doe', 30);

const person2 = new Person('Alice', 25);





type Item = {
    title : string;
    rating : number;
}
function filterByRating (items:Item[]) : Item[]{
    for(const item of items){
        if (item.rating < 0 || item.rating >5 ){
             throw new Error(`Invalid rating for "${item.title}". Rating must be between 0 and 5.`);
        }
    }
    return items.filter(item => item.rating >= 4);
}



type User ={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

function filterActiveUsers(users: User[]):User[]{
        return users.filter(user=>user.isActive === true);
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book:Book): void {
    const availability = book.isAvailable ? "yes" : "no";
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)
}




function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]):(string | number)[]{
    const result : (string | number)[] = [];
    function addValue(value:string | number){
        let exists = false
        for( let i = 0; i <result.length; i++){
            if(result[i] === value){
                exists = true;
                break;
            }
        }

        if(!exists){
             result.push(value)
        }      
        
    }


    for (let i = 0; i< arr1.length; i++){
        addValue(arr1[i]!);
    }

    for (let i = 0; i< arr2.length; i++){
        addValue(arr2[i]!);
    }


     return result;
}






type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {
  
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    
    const basePrice = product.price * product.quantity;

    const discountAmount = product.discount 
      ? (basePrice * product.discount) / 100 
      : 0;

    const finalPrice = basePrice - discountAmount;
   
    return total + finalPrice;
  }, 0); 
}



