const repeatString = function(word,numOfRepetition) {
let words = word;
for(let i=1; i<numOfRepetition; i++){
words +=word;}
return words;
};

// Do not edit below this line
module.exports = repeatString;
