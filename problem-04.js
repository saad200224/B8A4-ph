
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
const inputObj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
console.log(findAddress(inputObj));