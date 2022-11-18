const numbers = [1, 2, 3];
console.log(numbers)

// Limits the length
// const moreNumbers = Array(5); // new is not needed // new Array(5, 2) will actually create an array with 5 and 2 in it
// console.log(moreNumbers);


// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li')
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {modeDetail: []}];
console.log(personalData[1]);

const analyticsData = [[1, 1.6], [4, 5, 60]];

for (const data of analyticsData){
  for (const dataPoint of data){
    console.log(dataPoint);
  }
}