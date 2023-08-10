function canPay(changeArray, totalDue) {

  if (!Array.isArray(changeArray)) {
    return "For First Input: Please provide an array.";
  }

  else if (typeof totalDue !== "number" || totalDue < 0) {
    return "For Second Input: Please provide a positive number only.";
  }

  else {

    if (changeArray.length == 0 || changeArray.length <3) {
      return "Please input 3 positive numbers inside array.";
    }

    else {

      for (let i = 0; i < changeArray.length; i++){

          if (typeof changeArray[i] !== "number" || changeArray[i] <0 ) {
              return "Please provide only positive numbers inside array.";
          }
      }

      let sum = 0;

      for (let i = 0; i < changeArray.length; i++) {
          sum = sum + changeArray[i];
      }
      if (sum >= totalDue) {
          return true;
      }else {
          return false;
      }
    }
  }
}

const moneyArray = [1, 4, 5];
const chipsPrice = 10;

console.log(canPay(moneyArray, chipsPrice));