
function findAddress(address){

    if(typeof address !== "object"){
        return "Please provide valid object"
    } else{

    const street = address.street
    const house = address.house
    const society = address.society

    return street+','+house+','+society
    }
}
const inputObj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
console.log(findAddress(inputObj));