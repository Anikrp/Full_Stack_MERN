// console.log("hello world");

// let a = "Anik";
// var b = "Roy";

// console.log(a+" "+b);

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// const x = document.querySelector("p");
// x.textContent = "Hello world!";

// let x1 = 4;
// let y = 23;
// console.log(x1==y);

// //while loop

// let x4 = 5;
// while(x4 > 2){

//     console.log("Anik")
//     console.log(`${x4}`);;
//     x4--;


// }
// //for loop

// for(let i = 0;i<20;i++){
//     console.log("Hello World from for looop" + i);
// }

// //declaraton of function

// function anik(){

//     console.log("I am Learning JS");



// }

// //ececution of function
// anik();

// //taking input and printing

// //let myvar = prompt("Enter your name : ");
// //console.log("Hello " + myvar);

// //class example why do we need this

// let student1 = {
//     name: "Anik",
//     dob:3-2-2000,

// }
// let student2 = {
//     name: "Adnan",
//     dob:10-7-2001,
// }
// console.log(student1,student2);


// //object properties

// class person{
//     constructor(n , a){
//         this.name = n;
//         this.age = a;


//     }
// }
// // creating object
// const person1 = new person("Anik Roy", 25);

// console.log(person1);


// Learning DOM

let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all[9];
val = document.all.length;
val = document.domain;
val = document.URL;
val = document.body;
val = document.doctype;
val = document.characterSet;
val = document.forms;


val = document.forms[0].method;
val = document.forms[0].action;
val = document.scripts[0].src;

console.log(val);




//dom selector 

// document.getElementById();
let val2;
val2 = document.getElementById("tittle_d");
val2 = document.getElementById("div1").className;
val2 = document.getElementById("tittle_d").className;

console.log(val2);

//Changing Styles


document.getElementById("tittle_d").style.backgroundColor = "blue";
document.getElementById("tittle_d").style.color= "red";
document.getElementById("tittle_d").padding = '15px';
document.getElementById("tittle_d").style.display = "block";


//changing Content

document.getElementById("tittle_d").textContent = "Welcome to JS Power";

document.getElementById("tittle_d").innerText = "Welcome Again";
document.getElementById("tittle_d").innerHTML = "<i>Hi this  Italic</i>";

c1 = document.getElementById("tittle_d");
c1.textContent= "Hi I am Back Again";







