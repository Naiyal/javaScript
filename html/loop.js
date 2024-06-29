for(let i = 0;i <5;i++){
    if(i===1){
        console.log("Python");
        continue;
    }
console.log(`Java ${i}`);
console.log("JavaScript");
}

var arr = [1,2,3,4,5,9 ];

// for(var x : arr){
// console.log(x);
// }

console.log(arr);

for(var i = 0 ;i<arr.length;i++ ){
    console.log(arr[i]); 
}

arr.forEach(
    function(Buby) {
        console.log(Buby);
    }
)

//map
let plays = [
{id:1 , name: 'fahed'},
{id:2, name: 'hozifa'},

];

plays.map(function (play) {
    console.log(play);
});

var object = {
    firstName: 'fahed',
    age: 22,
    job: 'SE',
}

for(var attribut in object){
    console.log(`${attribut}: ${object[attribut]}`);
}