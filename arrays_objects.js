arr1 = [1,2,3,4,5,6,7,8,9]



console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);


const key1 = Symbol("key1");

let obj1 = {
    name: "Talha",
    [key1] :Symbol("key1"),
    age: 22,
    gender: "male"
}


// console.log(obj1["name"]);
// console.log(obj1.name);

console.log(typeof obj1[key1]);



