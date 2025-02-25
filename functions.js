one();
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
const func = function add(num){

    return num + 1;
}


// add(5)       now allowed

console.log(func(5));   // allowed

