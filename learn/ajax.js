//creating an XMR object
function ajax(){
var xhttp=new XMLHttpRequest();                   
//Eventlistener                   
xhttp.onreadystatechange=function(){
  //condition
  if(this.readyState==4&&this.status==200){
    document.getElementById("demo").innerHTML=this.responseText;
  }
}
xhttp.open("GET","ajax.txt",true);  
xhttp.send();
}