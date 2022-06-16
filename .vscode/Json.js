var person={
    name : "Charu",
    age : 21
}
console.log(person);

//JavaScript to JSON
var Jperson=JSON.stringify(person);
console.log(Jperson);

//JSON to JavaScript
var Operson=JSON.parse(Jperson);
console.log(Operson);