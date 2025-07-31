const sumAll = function(a,b) {
let arr = new Array ();
for (let i=a; i<b+1; i++) {
arr.push(i);}
let result = arr.reduce((sum,current) => sum + current, 0);
return result;
};

// Do not edit below this line
module.exports = sumAll;
