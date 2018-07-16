const boxen = require('boxen');
const wrap = require('word-wrap');

const quoteArray = require('./quote-array')

function logQuote(){
    
    const boxSets = {
        padding: 0,
        align: 'center',
        borderColor: 'yellow'
    }

    //console.log(process.stdout.columns)
    let width = process.stdout.columns - 10
    //console.log(width)
    
    const wrappedQuote = wrap(getQuote(),{width})
    //console.log(wrappedQuote)
    console.log();
    console.log();
    console.log(boxen(wrappedQuote,boxSets))
    console.log();
    console.log();
}

function getQuote(){
    return (quoteArray[randomInt(quoteArray.length)])
}

function randomInt(upperBound, lowerBound = 0) {
    return Math.floor(Math.random()*upperBound)
}



module.exports = logQuote