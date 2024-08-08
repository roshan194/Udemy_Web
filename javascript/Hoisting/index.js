// getname();
// console.log(x);

// var x=7;
// function getname(){
//     console.log("Hello Roshan");
// }


// getName();
// console.log(x);
// console.log(getName);

// function getName() {
//     console.log("Hello roshan");
// }


// function a(){
//     console.log(b);
// }

// var b = 5;
// a();



// function a (){
//     c();
//     function c (){
//         console.log(b);
//     }
// }

// var b = 10;
// a();

// function a (){
//     c();
//     function c (){
//         var b=100;
//         console.log(b);
//     }
// }

// var b = 10;
// a();

function a(){
    c();
    var b=15;
    function c(){
        console.log(b);
    }
}
a();
console.log(b);
