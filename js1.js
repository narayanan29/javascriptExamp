//simple transformation

// const multi=num.map(number=>number*2);
// console.log(multi);

//modifying Array
// const name=["narayan","jakie"];
// const upper=name.map(nam=>nam.toUpperCase());
// console.log(upper);

// //combining Array
// const nam=["banana","Apple"];
// const col=["Yellow","Red"];
// const color=nam.map((name,index)=>name+"-"+col[index])
// console.log(color);
    
// //Filter an Array
// const filter=num.map(fil=>(fil%2===0));
// console.log(filter);
  
//modifying an array

// const modi=mod.map(user=>{
//     return{
//         name:user.name,
//         age:user.age+1
//     }
// })
// console.log(modi);

//Extracting properties
// const extr=mod.map(name=>name.name);
// console.log(extr);
  
// const prop=nam.map((Value,index,array)=>{
//     return {
//         word:Value,
//         property:index,
//         length:Value.length,
//         TotalWords:array.length
//     }
// })
// console.log(prop);

//Filter
// const evennumber=num.filter(num=>(num%2===0))
// console.log(evennumber);

// const eligible=mod.filter(name=>name.age>25);
// console.log(eligible);

// const check=animal.filter(five=>five.length===5);
// console.log(check);

// const dev=mod.filter(job=>job.job==="Developer");
// console.log(dev);

// const esta=animal.filter(Es=>Es.startsWith("k"))
// console.log(esta);


// const dev=mod.filter(sen=>sen.job==='Developer' && sen.age===22);
// console.log(dev);

// const name="NARAYANAN".toLowerCase();
// const age=22;
// const match=mod.filter(fname=>{
//     return fname.name.toLowerCase().includes(name) || fname.age===age;
// })
// console.log(match);

// let sum=num.reduce((number,i)=>number+i);
// console.log(nested);

// const concat=nested.reduce((main,i)=>main.concat(i));
// console.log(concat);

// const nested=[[1,2],[3,4],[5,6]];
// let color=["blue","red","green","yellow","green","blue"]
// let cal=color.reduce((main,i)=>{
//     if(i in main){
//         main[i]++;
//     }else{
//         main[i]=1;
//     }
//     return main;
// },{})
// console.log(cal)

// const larg=num.reduce((main,i)=>Math.max(main,i));
// console.log(larg);

// let groped=mod.reduce((main,i)=>
//    { if(i.job in main){
//         main[i.job].push(i);
//     }else{
//         main[i.job]=[i];
//     }
// //     return main;
// // },{}
// // );
// // console.log(groped);

// // console.log(num.slice());
// // console.log(num.slice(2));
// // console.log(num.slice(2,8));
// // console.log(num);

// const num=[1,23,4,56,76,8,9];
// const animal=["tiger","lions","cheetah","Elephant","korila"];
// const mod=[
//     {name:"rajesh jegan",age:29,job:"Developer"},
//     {name:"jegan rajesh",age:22,job:"Tester"},
//     {name:"Narayanan rajesh",age:22,job:"Developer"},
//     {name:"thankam Narayanan",age:21,job:"Developer"},
//     {name:"Arnald narayanan",age:22,job:"Developer"}
// ];
// num.forEach((value)=>{
//     console.log(value)
// })
// mod.forEach((value)=>{
//     console.log(value.name);
// })
// console.log(animal);
// animal.forEach((value)=>console.log(value));

// let tot=0;
// num.forEach((value)=>{
//     tot+=value;
// })
// console.log(tot);

// const double=[];
// num.forEach((value)=>{
//     double.push(value*value);
// })
// console.log(double);

//slice
// const num=[12,3,43,45,5,32,12,123,12,12];
// console.log(num.slice(5));
// console.log(num.slice());
// console.log(num.slice(2,5));
