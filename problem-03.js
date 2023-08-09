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

const arr = [2,4];

console.log(sortMaker(arr));