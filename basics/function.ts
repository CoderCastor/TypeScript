//named functions
function wish(){
    console.log("Happy Birthday");    
}
//Anonymous function
// function(){
//     console.log("my name is khan");  
// }

//arrow functions
let calling = () => {
    console.log("Hey! I'm calling sandip");
}

//explicit return type
function getName() : string {
    let nav = "tejas";
    return nav;
}

//implicit return type
function getNav(){ //implicitly guessing the return type
    return "tanvi";
}


//optional parameters
function getUserInfo(name : string , age : number , gender?: string){
    console.log(name,age);
}
getUserInfo("tejas",12);
getUserInfo("tanvi",12,"Female");


//default parameters
function getCustomer(name : string , age : number , Class : string = "middle class"){
    console.log("Here Class is default parameter");   
}


//rest parameters