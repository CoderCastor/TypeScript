// types
//primitive and reference

// let arr = [1,2,3,4,5];
// let arr2 = arr;
// arr2.pop;

// let a;  //don't do this

// let a : number;
// let array : [];
// let string : string = "Hello";

// // if you are giving value to the variable then do not declaire there datatype in that case

// // tuples
// let tpl : [number,string] = [1,"hi"];


let b : any;  //here the type is any initial
b = "tejas";
b =12;

//like that there is "unknown" type same as any
let naming : unknown;
naming = "rakesh";
naming = true;

//there are some other types --> never,void

//here we need to specify what the fn is returning if it gets change then throw error
function abcd() : number {
    return 12;
}
//it will help u to use methods for the returning datatype while calling the functions like "abcd()."


// error Code
// function erer(): string{
//     return 12;
// }

//likewise we have to return void if function in not returning any thing for example -->
// function vaaid() : void {
//     let a = "hello";
// }


// enum -- help to design object like datatypes
// eg -->
// enum Human{
//     name = "tejas",
//     age = 12,
//     roll = 323
// }
// console.log(Human.name); --->"tejas"



// type Inference - just guessing the datatype by its own
//now we can use || or for declaring variable datatypes like -->> let a : number | string;

function fn(variable : number | string){
    if(typeof variable ==='number'){
        variable.toFixed(2);
    }
    else if(typeof variable === 'string'){
        variable.toUpperCase();
    }
}

// fn(12);          it works
// fn("12");        it works
// fn("hero");      it works
// fn(true);        not works