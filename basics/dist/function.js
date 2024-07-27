"use strict";
//named functions
function wish() {
    console.log("Happy Birthday");
}
//Anonymous function
// function(){
//     console.log("my name is khan");  
// }
//arrow functions
let calling = () => {
    console.log("Hey! I'm calling sandip");
};
//explicit return type
function getName() {
    let nav = "tejas";
    return nav;
}
//implicit return type
function getNav() {
    return "tanvi";
}
//optional parameters
function getUserInfo(name, age, gender) {
    console.log(name, age);
}
getUserInfo("tejas", 12);
getUserInfo("tanvi", 12, "Female");
//default parameters
function getCustomer(name, age, Class = "middle class") {
    console.log("Here Class is default parameter");
}
//rest parameters
