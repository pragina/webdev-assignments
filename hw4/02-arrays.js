let result = [];

const insertItem = (item) => {
  // insert item into result
  result.push(item);
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result

  //find the index of an item
  let pos = result.indexOf(item);

  //Remove an item by index position
  result.splice(pos, 1);
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item

  let indexValue = result[index];

  //Remove an item by index position
  let pos1 = result.indexOf(indexValue);
  if (index >= 0) {
    result.splice(pos1, 1);
    return indexValue;
  } else return "null";
};

const printItems = () => {
  // return a string of the concatenated item in result, separated by commas
  return result.join(", ");
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);

console.log(printItems());
expected: "1, 2, 3, 2, 1";

console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);

console.log(printItems());
//expected: "3, 2, 1";
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
