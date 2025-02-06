// const func = <CustomType> (n:CustomType):CustomType =>{
//     let text : CustomType;
//     return n
// }

// const getInfo =<T> (info : T):T => {
//     return info
// }

// console.log(getInfo(12))
// console.log(getInfo('Devs'))
// console.log(getInfo(true))

// const arr : number[] = [34,12,32,4,2]
// console.log(arr)

// const newArray : Array<number> = []

// const func1 = <T, U>(a: T, b: U) => {
//   return { a, b };
// };

// const func2 = <T, U>(a: T, b: U):{a:T,b:U} => {
//     return { a, b };
// };

// const func3 = <T, U>(a: T, b: U):object => {
//     return { a, b };
// };

// const funcReturning = func1<number,number>(4,4)
// funcReturning.a //suggestions
// funcReturning.b //suggestions

// type TypePerson1 = {
//     name:string
//     age:number
// }

// type TypePerson2 = {
//     name:string,
//     age:number,
//     email:string
// }

// const manager:TypePerson1 = {
//     name:"Tejas",
//     age:21
// }

// const employee:TypePerson2 = {
//     name:'castor',
//     age:24,
//     email:'codercastor011'
// }

//Generic Function
// const func =<T,U extends T>  (user1:T,user2:U):{user1:T,user2:U} => {
//     return {user1,user2}
// }

//Function Call
// const output = func<TypePerson1,TypePerson2>(manager,employee)
// output.user1
// output.user2

type UserType = {
  name: string;
  age: number;
};

const users: UserType[] = [
  {
    name: "Tejas",
    age: 23,
  },
  {
    name: "Vaibhav",
    age: 19,
  },
  {
    name: "Aniket",
    age: 21,
  },
  {
    name: "Prajwal",
    age: 19,
  },
  {
    name: "Pratik",
    age: 19,
  },
  {
    name: "Sanket",
    age: 19,
  },
];

// const filterByPeoples = (
//   arr: UserType[],
//   property: "name" | "age",
//   value: string | number
// ) => {
//   arr.filter((item) => item[property] === value);
// };

//making above function generic
const filterByPeople = <T, Key extends keyof T>(
  arr: T[],
  property: Key,
  value: T[Key]
) => {
    return arr.filter((item) => item[property] === value)
    
};

const filterPeopleByName = filterByPeople(users, "name", "Sanket");
const filterPeopleByAge = filterByPeople(users,'age',19)
console.log(filterPeopleByName)
console.log(filterPeopleByAge)


