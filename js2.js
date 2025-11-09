//sort 
// const name=["jj","kk","aa","rajesh"];
// console.log("Before Name: "+name);
// name.sort();
// console.log("After Name:"+name);

//  let x=[12,23,100,12,10,123];
//  console.log("Before Number: "+x);
//  x.sort();
//  console.log("After Sort Number: "+x);

//  x.sort((a,b)=>{
//     return a-b;
//  })
// console.log("Sort numbers: "+x);

//Fill
// let x=[1,2,3,4,5,6,7,8,9];
// // console.log(x.fill(20));
// x.fill(10,4,8);
// console.log(x);

//Includes
// const name=["saravana","rajesh","ganesh","kumar"];
// console.log(name.includes("narayanan"));
// let x=name.includes("kumar");
// console.log(x);
// let y=name.includes("kumar",3);
// console.log(y);

//join
// const name=["saravana","rajesh","ganesh","kumar"];
// let x=name.join("%");
// let y=name.join();
// console.log(y);

//reverse
// const age=[18,35,32,12,15,19];
// age.reverse();
// console.log(age);
// //Array Element with length property
// const num={0:12,1:23,2:34,3:34,length:4};
// Array.prototype.reverse.call(num);
// console.log(num);

//push
// let n=[12,23,34,45];
// console.log(n);
// console.log(n.push(90));
// console.log(n);
// console.log(n.push(12,34,435,54));
// console.log(n);

// let fru=["Apple"];
// fru.push("Mango","Banana");
// console.log(fru);

// let user1=['ram','sam','ravi'];
// let user2=['arun','vijay'];
// user1.push(...user2);
// console.log(user1);

//pop
// console.log(user1.pop());
// console.log(user1);
// console.log(user1.pop());
// console.log(user1);

//shift
// console.log(user1.shift());
// console.log(user1);
// console.log(user1.shift());
// console.log(user1);

//unshift
// let len=user1.unshift('tiya','priya','jeya','swetha');
// console.log(len);
// console.log(user1);

// //indexOf
// let names=["sara","rajesh",'kumar',"jj","sara"];
// console.log(names.indexOf("jj"));

// let user="hello world welcome to world";
// let index=user.indexOf("o");
// console.log(index);
// let index2=user.indexOf("o",5);
// console.log(index2);

//lastIndexOf()
// let i=names.indexOf("sara");
// let l=names.lastIndexOf("sara");
// console.log(i);
// console.log(l);

// i=user.indexOf("world");
// l=user.lastIndexOf("world");
// console.log(i);
// console.log(l);

//Every/some
// let number=[12,324,56,,79,88];
// let res=number.every((num)=>{
//     return num%2==0;
// });
// console.log(res);

// function isEven(num){
//     return num%2==0;
// }
// result=number.some(isEven);
// console.log(result);

// const users=[
//     {name:"saravana",age:18},
//     {name:"rajesh",age:21},
//     {name:"jerlin",age:12}
// ];
// function isEligible(user){
//     return user.age>18;
// }
// let result=users.every(isEligible);
// console.log(result);
// let res=users.some(isEligible);
// console.log(res);
