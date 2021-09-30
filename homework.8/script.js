//////////////////////////////////////////////// 1

// function countTrue(mas){
//     let counterTrue=0;
//     for(let i = 0; i< mas.length; i++){
//         if (mas[i] === true){
//             counterTrue++;
//         }
//     }
//     return counterTrue;
// }
// console.log(countTrue([true, false, false, true, false]));
// console.log(countTrue([false, false, false, false]));
// console.log(countTrue([]));

//////////////////////////////////////////////// 2

// function getOccurrencesCount(mas){
// let OccurrencesCount = {

// }
// let enter = false;
// OccurrencesCount[mas[0]] =1;
// for(let i = 1; i< mas.length; i++){
    
//         for(let j in OccurrencesCount){
//             if(j == mas[i]){
//                 OccurrencesCount[mas[i]]++;
//                 enter = true;
//             } 
//         }
//         if(enter === false){
//             OccurrencesCount[mas[i]] = 1;
//         }
//         enter = false;
//     }
//    return OccurrencesCount;
// }
// console.log(getOccurrencesCount(["a", "v", "a", "b", "b"])); 
// console.log(getOccurrencesCount([
//     "apples",
//     "oranges",
//     "pears",
//     "pears",
//     "apples",
//     "oranges",
//     "oranges",
//     "pears",
//   ]));

//////////////////////////////////////////////// 2

function findExcess(mas) {
    let oddCount = 0;
    let evenCount =0;
    let checker;
    for (let i = 0; i<3; i++){
        if(mas[i] % 2 === 1){
            oddCount++;
        }else{
            evenCount++;
        }
    }
    if (oddCount > evenCount){
        checker = 0;
    } else{
        checker = 1;
    }
    for (let i = 0; i < mas.length; i++) {
       if(mas[i] %2 === checker){
           return mas[i];
       }
        
    }
}
console.log(findExcess([0, 1, 2]));
console.log(findExcess([1, 2, 3]));
console.log(findExcess([2, 6, 8, 10, 3]));
console.log(findExcess([0, 0, 3, 0, 0]));
console.log(findExcess([1, 1, 0, 1, 1]));