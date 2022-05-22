console.log("Welcome");

let elem=document.getElementById('first');
// console.log(elem);
// elem.style.color='red';
// //elem.innerText='I am changed';
// elem.innerHTML="<b> You are hacked.. </b>";

let sel=document.querySelector('#first');
// console.log(sel);
// sel.style.color='red';
// sel.innerHTML="I am child class";

var selQ=document.querySelector('div');
// console.log(sel);
//  selQ.style.color='blue';

let anotherQ=document.querySelectorAll('p');
//  console.log(anotherQ);
//  anoth
let mulElem=document.getElementsByClassName('child');
// console.log(mulElem);
// mulElem[1].style.color="Orange";

let showTag=document.getElementsByTagName('div');
console.log(showTag);
showTag[1].innerHTML="I am a Tag";