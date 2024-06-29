var arr = [2,5,7];

var x = arr.length;
console.log(arr);
console.log(typeof arr);
console.log("is array "+Array.isArray(arr));
console.log(x);
console.log("give me index 1 of array "+arr[1]);
console.log("i am grat a software engineer its me iam fahed");

console.log(arr.indexOf(100));

arr.push(10);
arr.unshift(1); 
arr.shift();
// arr.splice(0,2);
arr.reverse();
arr.sort();
arr = arr.concat([77,88,99])
console.log(arr);
