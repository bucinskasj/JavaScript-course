// const numbers = [1, 2, 3];
// console.log(numbers)

// Limits the length
// const moreNumbers = Array(5); // new is not needed // new Array(5, 2) will actually create an array with 5 and 2 in it
// console.log(moreNumbers);


// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li')
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const personalData = [30, 'Max', {modeDetail: []}];
// console.log(personalData[1]);

// const analyticsData = [[1, 1.6], [4, 5, 60]];

// for (const data of analyticsData){
//   for (const dataPoint of data){
//     console.log(dataPoint);
//   }
// }

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// const shiftedValue = hobbies.shift();
// console.log(hobbies);
// console.log(poppedValue, shiftedValue);

// hobbies[1] = 'Sleeping';
// hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);


// hobbies.splice(1, 0, 'Good Food', 'Coding');
// console.log(hobbies);

// const removedElements = hobbies.splice(-1, 1); // Negative indexes are allowed
// console.log(hobbies);
// console.log(removedElements);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.lastIndexOf(1.5));

// console.log(testResults.includes(10.99));

// const personData = [{name: 'Max'}, {name: 'Manuel'}];
// console.log(personData.indexOf({name: 'Manuel'})); // won't work on objects

// const manuel = personData.find((person, index, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, index, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = [];
  
// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = {index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

  
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);


const sortedPrices = prices.sort((a, b) => {
  if (a >b){
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices.reverse());

const filteredArray = prices.filter(price => price > 6);

console.log(filteredArray);

// let sum = 0;
// prices.forEach((price) =>{
//   sum += price
// });
// console.log(sum);

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum);

const data = 'new york;10.99;2000';

const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);