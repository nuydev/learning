/*
comment
*/ 

/*
แสดงผล
*/
// console.log("Hello World555")  // แสดงผลออกทาง console
// document.getElementById("text").innerHTML = "Nong May" //document = หน้าเวป innerHTML เป็น propoty ของ getElement
// document.write("Hello Document");
// window.alert("Hello alert");

/*
variable 
*/
// var x = 5;
// var y = 6;
// var z = x+y; 
// console.log(z);
// document.write(z);

/*
concatenate
*/
// var FristName = "Teerawat";
// var LastName = "Homthong";
// var FullName = FristName +" "+ LastName;
// console.log(FullName);

/*
Operators
*/
//Aritmetic operators
// console.log(4+2);
// console.log(4-2);
// console.log(4*2);
// console.log(4/2);
// console.log(4**2);
// console.log(4%2);
// var x = 1;
// console.log(x++);
// console.log(++x);

/*
Comparison
*/
// console.log(1==1);
// console.log(1===1);
// console.log(1!=1);
// console.log(1>1);
// console.log(1>1);

/*
Logical operators
*/
// console.log(true && true);
// console.log(true || true);

/*
function
*/
// function myFunction(val1,val2){
//     return val1*val2;
// }
// console.log(myFunction(2,4));

// function changeBg(){
//     document.body.style.backgroundColor="red";
// }

// function cToF(c){
//     var cTemp = c;
//     var cf = cTemp * 9 / 5 + 32;
//     var message = cTemp + "\xB0C is " + cf + "\xB0F";
//     console.log(message);
// }
// cToF(30);

/*
OOP
*/
// var myCar = {
//     //property
//    brand: "Ford",
//    model: "1",
//    color:"black" 
// };
// console.log(myCar.brand);
// var person = {
//     //property
//    fristName: "Teerawat",
//    lastName: "Homthong",
//    eyeColor:"black" ,
//    fullName: function(){
//        return this.fristName + " " + this.lastName;
//    }
// };
// console.log(person.fullName());

/*
Event
*/
// function displayDate(){
//     document.getElementById("demo").innerHTML = Date();
// }

/*
String
*/
// var x = "Teerawat \'nuy'\ Homthong \n123456";
// console.log(x);
// console.log(x.length);

/*
Array 
***ใช้ตัวเลขเข้าถึงข้อมูล ถ้า object จะใช้ property
*/
// var myArr = [
//     "BMW",
//     "Ford",
//     "Honda"
// ];//Array Literal
// var myArr2 = new Array("BMW","Ford","Honda");//Array Constructor
// console.log(myArr);
// console.log(myArr2);
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr.length);
//method in Array
// document.getElementById("demo").innerHTML=myArr.toString();
// document.getElementById("demo").innerHTML=myArr.join(" - ");
// myArr.pop();//ลบตัวท้าย
// console.log(myArr);
// myArr.push("HINO");//เพิ่มท้าย
// console.log(myArr);
// myArr.shift();//ลบตัวหน้า
// console.log(myArr);
// myArr.unshift("KAWASAKI");//เพิ่มหน้า
// console.log(myArr);
// myArr[0] = "NOCAR";//Overide
// console.log(myArr);
// delete myArr[0];
// console.log(myArr);
// myArr.splice(1,2,"GG");//add delete
// console.log(myArr);
// var myArr2 = myArr.concat(["1","2"]);
// console.log(myArr2);
// var myArr3 = myArr.concat(myArr2);
// console.log(myArr3);
// console.log(myArr);
// var myNewArr = myArr.slice(1,2);
// console.log(myNewArr);

/*
7 data Types in JavaScript
*/
//Primative Type
var myNumber = 10;
var myString = "Teerawat";
var myBoolean = true;
var myNull = null;
var myUndefined;
//Object Type
var myObject = {};
// ***ตัวแปรทั้งหมดเป็น dynamic type สามารถเปลี่ยนชนิดข้อมูลได้
// console.log(typeof(myNumber));
// console.log(typeof(myString));
// console.log(typeof(myBoolean));
// console.log(typeof(myNull));
// console.log(typeof(myUndefined));
// console.log(typeof(myObject));

/*
Math Object
*/
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.pow(5,5));
// console.log(Math.sqrt(4));
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.random());

/*
if else
*/
// var time = 10;
// if (time<12){
//     console.log("Good morning");
// }else{
//     console.log("Good evening");
// }

/*
switch case
*/
// switch(new Date().getDay()){
//     case 0:
//         console.log("สวัสดีวันจันทร์");
//         break
//     case 1:
//         console.log("สวัสดีวันอังคาร");
//         break;
//     case 2:
//         console.log("สวัสดีวันพุธ");
//         break;
//     case 3:
//         console.log("สวัสดีวันพฤหัสบดี");
//         break;
//     case 4:
//         console.log("สวัสดีวันศุกร์");
//         break;
//     case 5:
//         console.log("สวัสดีวันพุธ");
//         break;
//     case 6:
//         console.log("สวัสดีวันเสาร์");
//         break;
//     case 7:
//         console.log("สวัสดีวันอาทิตย์");
//         break;
//     default:
//         //action
//         break;
// }

/*
for loop
*/
// for(var i=0;i<5;i++){
//     console.log(i);
// }
// var cars = ["BMW","Ford","Honda","Audi"];
// for( var i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

/*
for in loop
*/
// var person = {
//     fname: "Teerawat",
//     lname: "Homthong",
//     age: 23
// };
// for (var x in person){
//     console.log(person[x]);
// }

/*
for of loop
*/
// var cars = ["BMW","Ford","Honda","Audi"];
// for (var x of cars){
//     console.log(x);
// }
// var myString = "JavaScript";
// var y;
// for (y of myString){
//     console.log(y);
// }

/*--------------------
Data Type convert
*/
// console.log(String(123));
// console.log(Number("255"));
// console.log(String(Date()));
// console.log(Number(true));

/*--------------------
Scope => local and global
*/
// var myCar = "Benz";//global

// function myFunc(){
//     var myName = "NongMay";//local
//     myName2 = "NongMay2";//auto global
//     console.log(myCar);
// }
// myFunc();
// console.log(myName2);

/*--------------------
JavaScript Hoisting
*/
// x = 5;
// console.log(y);
// //var x;//declaration Hoisted
// var y = 10;//Initailzation no Hoisted

/*--------------------
JavaScript โหมดเข้มงวด "use strict"
*/
// "use strict"
// x;

/*--------------------
This Keyword
*/
// console.log(this);
// var person = {
//     fname: "Teerawat",
//     lname: "Homthong",
//     fullname: function(){
//         return this.fname + " " + this.lname;
//     }
// };
// console.log(person.fullname());
// function myFunc(){
//     return this;
// }
// console.log(myFunc());

/*--------------------
let,const Keyword in ES6
    -  let => สามารถกำหนดค่าได้แต่ห้ามประกาศใหม่ ,เป็น block scope ไม่สามารถเข้าถึงได้จากภายนอก
    - const => ค่าคงที่ห้ามเปลี่ยนแปลง , เป็น block scope ไม่สามารถเข้าถึงได้จากภายนอก
*/
// var x = 5;
// var x = 6;
// console.log(x);

// let y = 5;
// y = "ds";
// console.log(y);

// const z = 9;
// console.log(z);

// let a = 10;
// {
//     let a = 5;
//     console.log(a);
// }
// console.log(a);

// var a = 10;
// {
//     var a = 5;
//     console.log(a);
// }
// console.log(a);

/*--------------------
Template String
*/
// var myName = "Teerawat";
// console.log(`Hi,My name is ${myName}`);//alt+96 => `

// function myName2(name){
//     console.log(`Hi,My name is ${name}`);
// }
// myName2("Teerawat");

/*--------------------
ES6 Arrow function => 
*/
// //function Expression
// var hello = function(){
//     return "hello World";
// }
// //function Declaration
// function hello(){
// }
// Arrow function
// var hello = () => "hello World";
// console.log(hello());
// var hello = (value) => "hello World" + value;
// console.log(hello("123"));

// /*--------------------
// ES6 ECMAScript 2015 class
// */
// class myClass{
//     constructor(name){
//         this.myName = name;
//     }
//     fullName(){
//         return "555" + this.myName;
//     }
//     static hello(){
//         return "hello";//ต้องใช้ชื่อคลาสในการเข้าถึง method นี้
//     }
// }
// var person = new myClass("Teerawat");
// console.log(person);
// console.log(person.fullName());//ดู property ใน object
// console.log(myClass.hello());//ต้องใช้ชื่อคลาสในการเข้าถึง method staticนี้

// /*--------------------
// ES6 ECMAScript 2015 class inheritance
// */
// class Car{
//     constructor(brand){
//         this.carname = brand;
//     }
//     present(){
//         return "I have a " + this.carname;
//     }
// }
// class Model extends Car{
//     constructor(brand,Model){
//         super(brand);
//         this.Model = Model;
//     }
//     show(){
//         return this.present() + ", it's a " + this.Model;
//     }
// }
// var myCar = new Model("Ford","Mustang");
// console.log(myCar.show());

/*--------------------
Style guide
*/
// var firstName = "Teerawat";//camelCase
// var x = y + z;//ต้องเว้นวรรค
// var myArr = ["val1","val2","val3"];
// var person = {
//     firstName: "Teerawat",
//     lastName: "Homthong",
//     eyeColor: "Black"
// };
// var i;
// for (i = 0;i < 10; i++) {
//     console.log(i);
// }
// var time = 5;
// if (time < 20) {
//     console.log("Good Day");
// } else {
//     console.log("Good Evening");
// }

/*--------------------
Reserved word = คำสงวน
*/