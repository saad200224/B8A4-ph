function sortMaker(arr) {

    if (arr[0] === arr[1]){
        return 'equal'
    }
    else if ( arr[0] > 0 && arr[1] > 0 ) {
        return 'Array Reverse Korte hobe'
    }
    else if ( arr[0] < 0 || arr[1] < 0 ){
        return 'Invalid Input'
    }
    
}

const arr = [2, 3];

console.log(sortMaker(arr));


