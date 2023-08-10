function cubeNumber(number){
    if (typeof number !== 'number'){
        return 'Please give a number.';
    }
    else{
        const cube = Math.pow(number, 3);
        return cube;
    }
}

function matchFinder(string1, string2) {

    if (typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Please give string only.';
    }else{
        const doesMatch = string1.includes(string2);
        return doesMatch;
    }
}

function sortMaker(arr) {

    if (!Array.isArray(arr)){
        return "Please provide array of two number.";
    } 
    else{
        
        if(typeof arr[0] !== "number" || typeof arr[1] !== "number"){
            return "Please provide number as array element."
        }
        else{
            if (arr[0] === arr[1]){
                return 'equal';
            }
            else if ( arr[0] > 0 && arr[1] > 0 ) {
                const reverseArray = [];
                reverseArray.push(Math.max(...arr));
                reverseArray.push(Math.min(...arr));
                return reverseArray;
            }
            else if ( arr[0] < 0 || arr[1] < 0 ){
                 return 'Invalid Input';
            }
        }
    }
}

function findAddress(address){

    if(typeof address !== "object"){
        return "Please provide valid object"
    } else{

    const street = address.street || '__'
    const house = address.house || '__'
    const society = address.society || '__'

    return street+','+house+','+society
    }
}

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