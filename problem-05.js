function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray)) {
    return "For First Input: Please provide an array.";
  } else if (typeof totalDue !== "number") {
    return "For Second Input: Please provide number.";
  } else if (totalDue < 0) {
    return "For Second Input: Please provide only positive number.";
  } else {
    if (changeArray.length == 0) {
      return "Please input 3 positive numbers as array element.";
    } else {
      for (let i = 0; i < changeArray.length; i++) {
        if (typeof changeArray[i] !== "number") {
          return "please provide me an array of number";
        } else {
          let sum = 0;
          for (let i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i];
          }
          if (sum >= totalDue) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }
}

const changeArray = [1, 5, 5];
const totalDue = 10;

console.log(canPay(changeArray, totalDue));
