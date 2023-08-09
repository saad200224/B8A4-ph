function canPay(changeArray, totalDue) {

    let sum  = 0;
    for ( let i = 0; i < moneyInHand.length; i++){
        sum = sum + moneyInHand[i];
    }
    if ( sum >= chipsPrice){
        return true;
    }else
    {
        return false;
    }
}

const moneyInHand = [1, 5, 5];
const chipsPrice = 10;

console.log(canPay(moneyInHand, chipsPrice))