// in class don not use inside word let var const function 
// there are methods
// use this keyword for accessing variables in class
// use `` inside string for variable 

// use extend for extending the class or for achieving inheritance

// revise access modifiers public private protected 
//by default public -> no need to define

class Airpod{
    price = 25000;
    image = "not known"
    color = "black"

    playMusic(){
        console.log("Music in playing...");
    }

    switchMode(mode : string){
        console.log(mode);       
    }
}

//readonly 
//get set method works like props