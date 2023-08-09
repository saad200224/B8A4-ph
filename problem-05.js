function canPay(changeArray, totalDue) {

    if ( changeArray.length == 0 ){
        return "Please input 3 positive numbers as array element.";
    } 
    else{
        let sum  = 0;
        for ( let i = 0; i < changeArray.length; i++){
            sum = sum + changeArray[i];
        }
        if ( sum >= totalDue){
            return true;
        }else
        {
            return false;
        }
    }
}

const changeArray = [];

const totalDue = 10;

console.log(canPay(changeArray, totalDue))