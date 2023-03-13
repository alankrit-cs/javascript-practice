const array1 = ['Note 1','Note 2', 'Note 3', 12, false]

// console.log(array1);

//To remove and add to the end of the array

let removedValue = array1.pop();
array1.push('The last note')

// console.log(array1);

//To remove and add to the beginning of the array

let removedFromBegining = array1.shift();
array1.unshift('The modified note 1');

// console.log(array1);

//To insert and delete in-between array
array1.splice(2,2);

array1.splice(1, 0, 'The middle note')

array1.splice(2,1, 'The third note')

array1[2] = 'The penultimate note';

console.log(array1);

console.log(array1.indexOf('The middle note'))