//////////////////////////////////////////////// 1
// function trueUser(userName){
//     userName = userName.toLowerCase();
//     let letter = userName[0];
//     letter = letter.toUpperCase();
//     userName = userName.slice(1);
//     userName = letter + userName;
//     return userName;
// }

// let userName = prompt('say your name');
// while(!userName || userName.length<2){
//   userName = prompt('say your name');
// }

// userName = trueUser(userName);
// let userSurname = prompt('say your surname');
// while(!userSurname || userSurname.length<2){
//   userSurname = prompt('say your surname');
// }

// userSurname = trueUser(userSurname);
// let allBigSymbol = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
// let allSmallSymbol =`abcdefghijklmnopqrstuvwxyz`
// let userPassword;
// let haveNotBig = true;
// let haveNotSmall = true;

// while(!userPassword || userPassword.length<7 ||haveNotBig || haveNotSmall){
//     userPassword = prompt('say your password');
//     for(let i = 0; i < userPassword.length; i++){
//         for(let j = 0; j < allBigSymbol.length; j++){
//             if(userPassword[i] === allBigSymbol[j] ){
//                 haveNotBig = false;
//             }
//             if(userPassword[i] === allSmallSymbol[j]){
//                 haveNotSmall = false;
//             }
//             if(haveNotBig == false && haveNotSmall == false){
//                 break;
//             }
//         }
//     }
// }
// alert(`Hello, ${userName} ${userSurname}!`)

////////////////////////////////////////////////////////// 2

// function random(min, max) {
//     let rand = Math.floor(Math.random() * (max + 1 - min) + min);
//     return rand;
// }
// alert(random(10, 100));
// alert(random(1, 100));
// alert(random(1, -100));
// alert(random(1, 1));
