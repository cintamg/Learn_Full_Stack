let enter=document.getElementById("enter");
var press=document.getElementById("press");
var num=document.getElementById("num");
function validate(){
    let x=enter.value;
    num.innerHTML="";
    try{
        if(x=="") throw "Field is empty";
        if(isNaN(x)) throw "Not a number";
        if(x<5) throw "Low value";
        if(x>10) throw "High value";
    }
    catch(error){
        num.innerHTML = "Input is "+ error;
    }
    finally{
        enter.value="";
    }
}