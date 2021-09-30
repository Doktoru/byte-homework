// function funcFirst (number1, number2){
//     return number1 + number2;
// };

// let funcSecond = (number1, number2) => number1 + number2;
// alert(funcSecond(1,5));
// alert(funcFirst(3,19));
// alert(funcSecond(27.4,31.89));
// alert(funcFirst(-123,-2.3));
// alert(funcSecond(123123,321321));

/////// 2

// function askAgeName (){
//   let name = prompt("Say your name");
//   let age = Number(prompt("Say your age"));
//   if (age >=30){
//     alert("Nice to meet you, "+ name);
//   }else{
//     alert("Hello, "+ name);
//   }
// };
// askAgeName ();

/////// 3

function funcFirst (number1, number2 = 2){
   alert(Math.pow(number1, number2));
};
funcFirst(8);
funcFirst(4,3);
funcFirst(2,7);
funcFirst(10);