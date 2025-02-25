// one();
function one(){
    const name = "Talha";
    function two(){
        last_name = "Iftikhar";
        // console.log(name);
    }
    // console.log(last_name);
    
    two();
}


// one();


// func(5);     not allowed(hositing)
const func1 = function(num){

    return num + 1;
}


// add(5)       now allowed

// console.log(func(5));   // allowed











// +++++++++++++++++++++++++++++++ This ++++++++++++++++++++++++++++++++++++ //



// function ok(){

//     console.log(this);
    
// }

// ok();













// this dosn't work in functions
// function ok(){  
//     let username = "Talha";

//     console.log(this.username);
    

// }

// ok();

// console.log(username);







// this dosn't work in Arrow functions
// const func2 = () => {
//     hello = "hello";
//     console.log(this);
// }

// func2();








// in arrow functions with '{}' return statement is mandatory
// const add = (num1,num2) => {return num1 + num2}

// console.log(add(4,5));








// in arrow functions with '()' return statement is not required
// const add = (num1,num2) => ( num1 + num2)

// console.log(add(4,5));








// const add = (num1,num2) => num1 + num2

// console.log(add(4,5));



// To return object in arrow function we need to inclose that object in '()'
// const obj = () => ({usrname: "Talha",
//                             age: 22,
//                             fee: 20000
// })

// console.log(obj());