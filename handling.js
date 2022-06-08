let press=document.getElementById(press);

function myfunc()
{
    var a=1;
    try{
        addalert("Value of a : "+a);
    }
    catch(e){
        console.log("Error : "+e);
    }
}