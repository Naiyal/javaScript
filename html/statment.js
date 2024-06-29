var condition = 10;


// if (typeof condition != undefined) 
//     console.log(`its true value is ${condition} `);
// else
//     console.log("its false");

var today = new Date();
today.getDay();
// console.log(today.getDay()); 

function rectangileArea(w = 0,h = 0) {
    return w*h;
}
//function expression
let square = function(x = 0){
    return x *x;
}; 

//immediately invoka
(function (x) {
    console.log(x+10);
})(5);

 console.log((square(7)));

 //property method

 var car = {
    price: function(total) {
        console.log(`price of car ${total} `);
    }
 }

 car.break = function(){
    console.log("break");
 }

 car.price(10);
 car.break();
 
const value2 = prompt("Enter");

const reply = confirm("Are you sure: ");
