const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}
console.log("Hello World")
const sum = (x,y) => {
    return x+y
}
console.log(sum(7,3))
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
