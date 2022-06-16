display=(result)=>{
    console.log("Result = "+result);
}
add=(a,b,fn)=>{
    c=a+b;
    fn(c);
}
subtract=(a,b,fn)=>{
    c=a-b;
    fn(c);
}
var x=10;
var y=15;
add(x,y,display)
subtract(x,y,display)