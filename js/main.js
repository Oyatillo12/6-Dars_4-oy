// Birinchi Masala 1-img

// 1 Task

// function enterNum(num){
//     return   String(num).split("").reverse().join("") - 0
// }
// console.log(enterNum(628));

// 2 Task 

// function factoeial(x){
//     if(x === 0){
//         return 1
//     }
//     else if(x > 0){
//      return  x * factoeial(x - 1)
//     }
// }
// console.log(factoeial(5));


// 3 Task

// let obj1 = {id:1, name:"Oyatillo", age:20, hobby:"Football"}
// let obj2 = {id:2, name:"Ulugbek", age:22, hobby:"Watching 2Drots"}

// function maxAge(person, person2){
//     if (person.age > person2.age) {
//         console.log(person.name);
//       }
//        else {
//         console.log(person2.name);
//       } 
// }

// maxAge(obj1, obj2)



// 4 Task

// function num(n){
//     console.log(n);
//     let b = n - 1;
//     if(b > 0){
//         num(b)
//     }
// }
// num(7)


// 5 Task

// let user = {name : "Shaxzod"}
// let age = {age : 25}
// let userJob = {job : "Developer"}

// function joinObj(user, age, userJob){
//     return Object.assign( user, age, userJob)
// }
// console.log(joinObj( user,age,userJob));


// 6 Task
// let salaries = {
//     aXodim: 150,
//     bXodim: 180,
//     cXodim: 210
// } 
// function totalSalary(salaries){
//     let values = Object.values(salaries)
//     let total = 0
//     for (let i = 0; i < values.length; i++) {
//         total += values[i];
//     }
//     return total
// }

// console.log("Ishchilar maoshining yigindisi: " + totalSalary(salaries));


//  7 Task

// const arr = [8,56,3,46,455,13]

// function maxNum(arr){
//     let max = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log("Arrayning eng katta qiymati: " maxNum(arr));
 

//  8 Task

// let arr = [2, 4, 6, 7 , true, false, null , undefined]

// function totalFnc(arr){
//     let totalNum = 0
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "undefined"){
//             arr[i] = 0
//         }
//         else{
//             totalNum += arr[i]
//         }
//     }
//     return totalNum
// }
// console.log("Yigindisi: ", totalFnc(arr));


// Ikkinchi rasmdagi masalalar

// 1 Task

// let arr = [
//    {
//     name: "Abdulloh",
//     age:21,
//     status: false
//     },
//     {
//     name: "Botir",
//     age: 18,
//     status: true
//     },
//     {
//     name: "Shokir",
//     age: 12,
//     status: false
//     }
// ]

// function findFalse(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].status === false){
//             console.log("False bolganlar:", arr[i]);
//         }
//         else{
//             console.log("True bolganlar:", arr[i]);
//         }
//     }
// }
// findFalse(arr)

// 2 Task

// function totalFnc(a) {
//     if(a > 10 ){
//         console.log("Iltimos 1 dan 10 gacha raqam kiriting");
//         return
//     }

//     let yigindi = 0
//     for (let i = 1; i <= a; i++) {
//         yigindi += i
//     }
//     return yigindi
// }
// console.log(totalFnc(10));

// 3 Task

// let arr = [1, "true", undefined,  45, "salom"];
// let arr2 = [3, false, "salom", 1, "null"];


// function findSimilar(arr, arr2){
//     let simlar = 0
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr[i] == arr2[j]){
//                 simlar++
//             }
//         }
//     }
//     return simlar
// }
// let res = findSimilar(arr, arr2)
// console.log("Arrayning ichida bir xil bolganlarning soni:", res);


//  4 Task

//  let arr = [1, 78, 87,  45, 997];
//  let arr2 = [3, 45, 213, 1, 674];

//  function maxValue(arr,arr2){
//     let max = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr[i] > max){
//                 max = arr[i]
//             }
//             else if(arr2[j] > max){
//                 max = arr2[j]
//             }
//         }
//     }
//     return max
//  }

//  console.log(maxValue(arr,arr2));


//  5 Task
// let enterNum = prompt("Son kiriting")
// function num(n){
//     if( n >= 1){ 
//         for(let i = 1; i <= n; i++){
//             console.log(i);
//         }
//     }
//     else {
//         console.log("bir yoki undan katta son kiriting");
//     }
// }
// let res = num(enterNum);
// console.log(res);



// Uchinchi rasmdagi misollar 

// 1 Task

// let size = prompt("Arrayni sizeni kiriting") - 0;

// function objectFnc(arr){
//     let array =[]
//     for(let i = 1;i <= size;i++){
//         let name = prompt(`${i}chi ID uchun Ism kiriting`);
//         const obj = {
//             ID: i,
//             Ism: name
//         }
//         array.push(obj)
//     }
//     return array
// }

// console.log(objectFnc(size));


// 2 Task 

// let arr = [1,1,2,2,3,3,4,4,5,5,6,6,6];

// function arrFnc(arr){
//     let array2 = []

//     for(let i = 0; i < arr.length;i++ ){
//         let found = false 
//         for(let j = 0; j < array2.length; j++){
//             if(arr[i] == array2[j]){
//                 found = true
//                 break;
//             }
//         }
//         if(!found){
//             array2.push(arr[i])
//         }
//     }
//     return array2
// }
// console.log(arrFnc(arr));


// 3 Task
// let arr = [88,75,342,21,45,67]


// function findValue(arr) {
//     let enterNum = prompt("Son kiriting") - 0;

//     let index = arr.indexOf(enterNum)
//     if( index !== -1){
//         console.log(`Bu sonni ${enterNum} index orni ${index}`);
//     }
//     else{
//         console.log(`Siz kiritgan son ${enterNum} topilmadi`);
//     }

// }
// findValue(arr) 


// 4 Task

// let arr = [88, 75, 342, 21, 45, 67];

// function removeValue(arr) {
//     let enterNum = prompt("Arraydan olib tashlash uchun bir son kiriting:") - 0;
//     if (typeof enterNum == 'number') {
//         let index = arr.indexOf(enterNum);

//         if (index !== -1) {
//             arr.splice(index, 1);
//             console.log(`Olib tashlandi --> ${enterNum}: `,arr);
//         } else {
//             console.log("Siz kiritgan son arrayda mavjud emas");
//         }
//     } else {
//         console.log("Son kiriting !!!");
//     }
// }
// removeValue(arr);


// 5 Task

// function findTwoLargest(arr) {
//     let bignums = arr.sort((a,b) => b - a)
//     return  bignums[0] + bignums[1]
// }

// let array = [1,2,3,4,10];
// console.log("Ikkita eng katta bolgan qiymatlaring yigindisi:", findTwoLargest(array));


// Qoshimcha misollar arrayni bazi bir mathodlarni organib chiqib qilingan misollar

// 1 Arraydagi minimum qiymatini toping

// let arr = [88, 75, 342, 21, 45, 67];

// function minValue(arr){
//     let min = arr.sort((a,b) => a-b)
//     return min[0]
//   }
// console.log(minValue(arr));


// 2 Arraydagi Juft Sonlarni Filtrlash

// let arr = [2,3,4,5,6,7,8,9,10]

// function evenNums(arr) {
//     return arr.filter(son => son % 2 == 0); 
// }
// console.log(evenNums(arr));

// 3 Arrayni teskari tartibda chikarish

// let arr = [1,2,3,4,5,6,7]

// function reverseArr(arr){
//     return arr.slice().reverse()
// }
// console.log(reverseArr(arr));


// 4 Arraydagi elementlarni yigindisini chikarish

// let arr = [8, 7, 34, 2, 5, 7];

// const total = (arr) => arr.reduce((acc, num) => acc + num,0)

// console.log(total(arr));


// 5 Arraydagi qiymatlarning orta arifmetigini chikaring

// let arr = [100,200,300,400,500]
// const normal = function (arr){
//     let total = arr.reduce((acc, num) => acc + num, 0)
//     return total / arr.length
// }
// console.log(normal(arr));