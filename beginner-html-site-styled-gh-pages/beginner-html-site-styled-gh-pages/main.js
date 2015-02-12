

var myImage=document.querySelector("img");
myImage.onclick=function(){	
	var myScr=myImage.getAttribute('src');
	if (myScr==="images/firefox-icon.png"){
		myImage.setAttribute('src','images/second.jpg');

	} else {
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}
var myButton=document.querySelector("button");
var myHeading=document.querySelector("h1");

myButton.onclick=setUserName;
if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeading.innerHTML="Mozilla is cool, "+storedName;
}
function setUserName(){
	var name=prompt('Please enter your name.');
	localStorage.setItem('name',name);
	myHeading.innerHTML="Mozilla is cool, "+name;
}