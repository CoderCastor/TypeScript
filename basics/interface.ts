// type name = string;
// type name = number;     ---> throws error due to same name

// basics of interfaces -------->>>> 
interface Men {
    name : string,
}

interface Men {
    height : number;
    color : string;   
}

function getUser(user : Men) : string {
    return user.name.toUpperCase();
}

let tushar : Men = {
    name : "rakesh",
    color : "black",
    height : 12
}

console.log(getUser(tushar));

// extends in interface
interface food {
    name: string;
    price: number;
}
interface sweetFood extends food{
    mitha : string;
}

function getFood(dish : food){
    dish.name;
    dish.price;
}

function gettFood(dishes : sweetFood){
    dishes.name;
    dishes.price;
    dishes.mitha;
}