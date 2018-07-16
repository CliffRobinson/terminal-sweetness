const quoteArray = require('./quote-array')

function logQuote(){
    console.log(quoteArray[randomInt(quoteArray.length)])
}

function returnQuote(){
    return (quoteArray[randomInt(quoteArray.length)])
}

function randomInt(upperBound, lowerBound = 0) {
    return Math.floor(Math.random()*upperBound)
}

logQuote();

module.exports = returnQuote