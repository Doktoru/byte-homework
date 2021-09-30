// let number1 = Number(prompt("write first number"));
// let number2 = Number(prompt("write second number"));
// if(number1 > number2){
//     alert(number1 +" is greater then " + number2);
// } else if (number2 > number1) {
//     alert(number2 +" is greater then " + number1);
// } else {
//     alert("numbers are equal");
// }

///////// 2

// let term1 = Number(prompt("write first number"));
// let sign = prompt("choose sign");
// let term2 = Number(prompt("write second number"));
// switch(sign){
//     case "+":
//         alert(term1 + term2);
//         break;
//     case "-":
//         alert(term1 - term2);
//         break;
//     case "*":
//         alert(term1 * term2);
//         break;
//     case "/":
//         alert(term1 / term2);
//         break;
// }

///////// 3

let age = Number(prompt("write your age"));
if(age <= 80 && age >= 12){
    if((age >=12 && age <=18) || (age >=60 && age <=80)){
        let passHave = confirm("have you pass?");
        if (passHave){
            alert("you can pass");
        }else{
            alert("sorry, you cant pass");
        }
    }else{
        alert("you can pass");
    }
} else{
    alert("sorry, you cant pass")
}
