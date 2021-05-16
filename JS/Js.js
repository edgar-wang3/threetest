// JavaScript Document
var n=9;
var flag=1;
var ctrl;

function leftshowimg(){
	var imgobj=document.getElementById("focusimg");
	imgobj.src="Images/Images/banner-"+flag+".jfif";
	if(flag==1){
		flag=n;
		}
		else{
			flag--;}
	}
	function rightshowimg(){
		var imgobj=document.getElementById("focusimg");
	imgobj.src="Images/Images/banner-"+flag+".jfif";
	if(flag==n){
		flag=1;
		}
		else{
			flag++;
			}
	}
	function autoPlay(){
		leftshowimg()
		ctrl=setTimeout("autoPlay()",3000);
		}
		function stopPlay(){
			clearTimeout(ctrl);}