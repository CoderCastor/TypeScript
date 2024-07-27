// const para = document.querySelector("p");
// para.   this is getting all about html not good practice

function abcd(para: HTMLDivElement){
    // para.   specific
}

function abcd(para: HTMLImageElement){
    // para.   specific
}

function abcd(para: HTMLInputElement){
    // para.   specific
}


//----------------------------------

function dcba(){
    //approch 1
    // (document.querySelector("p") as HTMLParagraphElement).
     (document.querySelector("p") as HTMLParagraphElement).innerHTML;

    // approch 2
    <HTMLParagraphElement>document.querySelector("p")
}