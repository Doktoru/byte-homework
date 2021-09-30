/////// 1

// const LOGIN = "ADMIN";
// const PASSWORD = "1q2w3e";
// const authorize = () => {
//   let userPassword;
//   let userLogin;
//   let isAuthSuccess = false;
//   let numberOfAttempts = 3;

//   do {
//     userLogin = prompt("Логин:");
//     if (!userLogin) {
//       alert("Введите логин");
//       continue;
//     }

//     userPassword = prompt("Пароль:");
//     if (!userPassword) {
//       alert("Введите пароль");
//       continue;
//     }

//     if (userPassword === PASSWORD || userLogin === LOGIN) {
//       isAuthSuccess = true;
//       alert("Welcome");
//     } else {
//       numberOfAttempts--;
//       if(numberOfAttempts===0){
//         alert("Данные неверны! Вы не смогли зайти");
//         break;
//       }
//       alert("Данные неверны! Попыток осталось: " + numberOfAttempts);
//     }
//   } while (!isAuthSuccess && numberOfAttempts>0);

  
// };
// authorize();

//////// 2
  let examination = true;
  let firstNumber = prompt("First number");
  let secondNumber = prompt("Second number");
const authorize = (firstNumber, secondNumber ) => {
    for(let i = (firstNumber==1 ? 2 : firstNumber); i <= secondNumber; i++){
        for(let k = 2; k<i; k++){
            if(i%k == 0){
                examination =false;
                break;
            }
        }
        if(examination){
            console.log(i);
        }
        examination = true;
    }
}
authorize(firstNumber, secondNumber);