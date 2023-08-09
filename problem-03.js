function sortMaker(arr) {

    if (arr[0] === arr[1]){
        return 'equal'
    }
    else if ( arr[0] > 0 && arr[1] > 0 ) {
        const maxElement = arr[0];
        const reverseArray = [];
        for (let i = 0; i < arr.length; i++){
            const index =i;
            const element = arr[index];
            if( element > maxElement){
                maxElement = element;
                reverseArray.push(element); 
            }
            return reverseArray;
        }
        return reverseArray;
        
    }
    else if ( arr[0] < 0 || arr[1] < 0 ){
        return 'Invalid Input'
    }
    
}

const arr = [2, 3];

console.log(sortMaker(arr));


