var div = document.querySelector(".div");
var folder1 = document.querySelector("#folder1");
var folders = document.querySelector("#folders");
var file = document.querySelector(".iconName");
var folderName = document.querySelector("#folderName");

window.oncontextmenu= function (e) {
	event.preventDefault();
	var xPosition = e.clientX;
	var yPosition = e.clientY;
	div.style.display = "block";
	div.style.top = yPosition - 70 + "px";
	div.style.left = xPosition + "px";
}
window.onclick = function (){
	div.style.display = "none";
}
folder1.onclick=function (){
    var name = prompt("New folder", "Unnamed folder");
    if (name != null) {
        file.style.display = "inline-block";
        document.getElementById("folderName").innerHTML = name;
    }
}


  
