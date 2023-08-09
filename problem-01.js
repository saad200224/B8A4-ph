function cubeNumber(number){
    if (typeof number !== 'number'){
        return 'Please give a number.';
    }
    else{
        const cube = Math.pow(number, 3);
        return cube;
    }
}
console.log(cubeNumber(4));