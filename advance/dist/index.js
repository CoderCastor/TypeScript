"use strict";
// console.log("Working");
// class user {
//   protected id;
//   protected name;
//   constructor(id: number, name: string) {
//     (this.id = id), (this.name = name);
//   }
//   getName = (): string => {
//     return this.name;
//   };
//   setName = (name: string): void => {
//     this.name = name;
//   };
// }
// class manager extends user{
//     address:string
//     constructor(id:number,name:string,address:string){
//         super(id,name)
//         this.address = address
//     }
//     getManagerData = ()=>{
//         return {
//             id : this.id,
//             name : this.name,
//             address : this.address
//         }
//     }
// }
// let user1 = new user(12, "kartik");
// user1.setName("Ramesh");
// console.log(user1.getName());
// const user2 = new manager(15,"Prajwal","At")
// console.log(user2.getManagerData())
// type user = {
//   name : string
//   age? : number
// }
// let User : user = {
//   name:"tejas",
//   age:12
// }
// console.log(User)
// console.log(User.name.toLocaleUpperCase())
// let user2 : Required<user> = {
//   name:"",
//   age:12
// }
// interface todo {
//   title: string;
//   description: string;
// }
// function updateTodo(todo:todo,fieldstoUpdate:Partial<todo>){
//   return {...todo,...fieldstoUpdate}
// }
// const todo1 = {
//   title: "Organize the desk",
//   description: "clear clutter",
// };
// const todo2 = updateTodo(todo1,{
//   description:"Move to trash"
// })
// console.log(todo1)
// console.log(todo2)
//Record Type
// type CatName = "Meera" | "Meca" | "Jas";
// interface CatInfo {
//   age: number;
//   breed: string;
// }
// const cats: Record<CatName, CatInfo> = {
//   Meera: {
//     age: 12,
//     breed: "Indian",
//   },
//   Jas: {
//     age: 2,
//     breed: "American",
//   },
//   Meca: {
//     age: 3,
//     breed: "Europe",
//   },
// };
//Type Pick
// interface orderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// type DeliveryDetails = Omit<orderInfo, "status" | "user">;
// const shippingDetails: DeliveryDetails = {
//   id: "qweryweirower",
//   city: "RTN08",
//   state: "MH",
//   country: "IN",
// };
// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; x: number }
//   | { kind: "triangle"; x: number; y: number };
//   type T3 = Exclude<Shape,{kind:"circle"}>
//   let obj : T3 = {kind:"square",x:12}
//   let obj1 : T3 = {kind:"triangle",x:12,y:12}
// type MyUnion = number | string | boolean
// type newType = Exclude<MyUnion,number>
// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; x: number }
//   | { kind: "triangle"; x: number; y: number };
//   type T3 = Extract<Shape,{kind:"circle"}>
//   let obj : T3 = {kind:"circle",radius:12}
//   let obj1 : T3 = {kind:"triangle",x:12,y:12}
// const updateProfile = (id: number,name : string) => {
//   return {id,name}
// }
// type getParameters = Parameters<typeof updateProfile>
// console.log(parameters)
// class C {
//   constructor(a: number, b: string) {}
// }
// type T3 = ConstructorParameters<typeof C>;
