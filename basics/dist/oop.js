"use strict";
// in class don not use inside word let var const function 
// there are methods
// use this keyword for accessing variables in class
// use `` inside string for variable 
// use extend for extending the class or for achieving inheritance
// revise access modifiers public private protected 
//by default public -> no need to define
class Airpod {
    constructor() {
        this.price = 25000;
        this.image = "not known";
        this.color = "black";
    }
    playMusic() {
        console.log("Music in playing...");
    }
    switchMode(mode) {
        console.log(mode);
    }
}
//readonly 
//get set method works like props
