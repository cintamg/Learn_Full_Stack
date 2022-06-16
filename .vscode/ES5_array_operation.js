//wether an object of the array
var fruits=["Mango","Orange","Grape","Apple"];
console.log(Array.isArray(fruits));

//forEach
var txt1="";
fruits.forEach(myfun1);
console.log(txt1);

function myfun1(i){
    txt1+=i+"\n";
}

//filter
var txt2=fruits.filter(myfun2);
console.log(txt2);
function myfun2(value)
{
    //return value.startsWith("M");
    return value.endsWith("e");
}