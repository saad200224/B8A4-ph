function findingBadData(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of number"
    }
    else{
        for(let i = 0; i<arr.length; i++){
                if(typeof arr[i] !== "number"){
                    return "please provide me an array of number"
                }else{
                    
                    }
                }
            
    
    }

}
const x = [ 13, '18' ];

console.log(findingBadData(x))
