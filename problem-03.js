function sortMaker(arr) {

    if (arr[0] === arr[1]){
        return 'equal'
    }
    else if ( arr[0] > 0 && arr[1] > 0 ) {
        
        const reverseArray = [];

        reverseArray.push(Math.max(...arr))
        reverseArray.push(Math.min(...arr))

        return reverseArray;
        
    }
    else if ( arr[0] < 0 || arr[1] < 0 ){
        return 'Invalid Input'
    }
    
}

const arr = [5, 6];

console.log(sortMaker(arr));


