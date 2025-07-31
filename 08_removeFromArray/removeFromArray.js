const removeFromArray = function(arr,value) {
if(arr.includes(value)){
arr.splice(arr.indexOf(value),1);}
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
