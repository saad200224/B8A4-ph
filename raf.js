function findingBadData(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of number"
    }else{
        let badData = 0;
        for(let i = 0; i<arr.length; i++){
            if(typeof arr[i] !== "number"){
                return "please provide me an array of number"
            }else{
                if(arr[i] < 0){
                    badData++;
                }
            }
        }

        return badData
    }
}

const x = [ 2, -5, -7, -13 ];

console.log(findingBadData(x))

// const x = false;

// console.log(!x) // false -> true

// const arr = [1,2,3,4];
// const x = "hello"

// // console.log(Array.isArray(x))

// if(!Array.isArray(x)){
//     console.log('this is not an array')
// }