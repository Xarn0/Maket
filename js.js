"use strict"
// const cars = ['masda', 'bmw', 'vaz'];
// console.log(cars.length)

// // for(var car = 0; car < cars.lenght; car++){
// //          console.log(car)
// //  }


// for(let i = 0 ; i <= 4 ; i++){
//          for(let j = 0; j < i; j++){
//             return j;    
//          }
//          console.log([i][j])
// }

// let arr = [

// [2,3],
// [4,5],
// [6,8]
// ]
// console.log(arr)
// let n = 20;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }




let burger = document.querySelector('.burger');
let burgerContent = document.querySelector('.burger__content');
let headerNav = document.querySelectorAll('.header__item');
headerNav.forEach(item=>{
  burgerContent.innerHTML += `<li>${item.innerHTML}</li>` 
})
 console.log(burgerContent.style.length)
burger.addEventListener('click',()=>{
 
    if(burgerContent.style.display == 'block'){
      burgerContent.style.display = 'none';
      
    }else{
     
      burgerContent.style.display = 'block'
    }
})