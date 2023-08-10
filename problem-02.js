function matchFinder(string1, string2) {

    if (typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Please give string only.';
    }else{
        const doesMatch = string1.includes(string2);
        return doesMatch;
    }
}

const string1 = 'JavaScript';
const string2 = 'Code';

console.log(matchFinder(string1, string2));