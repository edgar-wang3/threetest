// JavaScript Document
var n=4;
var flag=1;
var ctrl;

function leftshowimg(){
	var imgobj=document.getElementById("focusim");
	imgobj.src="Images/Images/yinyue-"+flag+".jpg";
	if(flag==1){
		flag=n;
		}
		else{
			flag--;}
	}
	function rightshowimg(){
		var imgobj=document.getElementById("focusim");
	imgobj.src="Images/Images/yinyue-"+flag+".jpg";
	if(flag==n){
		flag=1;
		}
		else{
			flag++;
			}
	}
		function stopPlay(){
			clearTimeout(ctrl);}