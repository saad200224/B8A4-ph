
function findAddress(address){

    const keysArray = Object.keys(address); 
    const valuesArray = Object.values(address);
    

    for (i = 0; i < keysArray.length; i++){
        console.log(valuesArray[i])
        
    } 

}
const inputObj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
findAddress(inputObj);