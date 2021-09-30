//////////////////////////////////////////////// 1

// const data = [
//     {
//       name: "John",
//       age: 24,
//       position: "senior",
//       isActive: false,
//     },
//     {
//       name: "Peter",
//       age: 33,
//       position: "middle",
//       isActive: false,
//     },
//     {
//       name: "Sam",
//       age: 29,
//       position: "junior",
//       isActive: true,
//     },
//     {
//       name: "Mary",
//       age: 24,
//       position: "middle",
//       isActive: false,
//     },
//     {
//       name: "Steve",
//       age: 23,
//       position: "middle",
//       isActive: true,
//     },
//     {
//       name: "Kate",
//       age: 31,
//       position: "middle",
//       isActive: false,
//     },
//     {
//       name: "Sally",
//       age: 19,
//       position: "junior",
//       isActive: false,
//     },
//     {
//       name: "Jack",
//       age: 19,
//       position: "middle",
//       isActive: true,
//     },
//   ];
// function filterData(mas, filters) {
//     let counter=0;
//     let needCounter =0;
//     let array=[];
//     let arrayCount=0;
//     for(let filter in filters){
//         needCounter++;
//     }
// //    console.log("needCounter ", needCounter);
//     for (let i = 0; i < mas.length; i++) {
//         let worker = mas[i];
// //        console.log("worker ",worker);
//         for(let what in worker){

//             for(let filter in filters){
// //                console.log("filters[filter] ",filters[filter]);
// //                console.log("worker[what] ", worker[what]);
//                 if(filters[filter] === worker[what]){
// //                    console.log("filters[filter] === worker[what] ", filters[filter] === worker[what]);
//                     counter++;
// //                    console.log("counter ", counter);
//                 }
//             }
//         }
//         if(counter == needCounter){
// //            console.log("counter == needCounter ", counter == needCounter);
//             array[arrayCount] = mas[i];
// //            console.log("array[arrayCount]",array[arrayCount]);
//             arrayCount++;
//         }
//         counter =0;
//     }
// //   console.log(array);
//     return array;
// }
// console.log(filterData(data, { age: 24 }));
// console.log(filterData(data, { age: 19, position: "junior" }));

//////////////////////////////////////////////// 2

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

function ownForEach(array, logger) {
  for (let i = 0; i < array.length; i++ ){
    logger(array[i], i, array);
  }
}

function ownMap(array, increment) {
    let newArray =[];
    for (let i = 0; i < array.length; i++ ){
      newArray[i] = increment(array[i], i, array);
    }
    return newArray;
}

function ownFilter(array, isNegative) {
  let newArray =[];
  let j =0;
  for (let i = 0; i < array.length; i++ ){
    if(isNegative(array[i])){
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray;
}

ownForEach([1, 2, 3], logger);
console.log(ownMap([1, 2, 3], increment));
console.log(ownFilter([-2, 4, -1], isNegative)); 