// start method
function start(){
	// add draggable and dragstart attributes to all list elements of elements-container class
	var designElements = document.querySelectorAll(".elements-container li");
	designElements.forEach(function(element){
		element.setAttribute("draggable","true");
		element.setAttribute("ondragstart","startDrag(this,event)");
	});
	// add toggle open and close to elements-container
	var headerNumber3 = document.querySelector("h3");
	var elementContainer = document.querySelector(".elements-container");
	
	headerNumber3.addEventListener("click",function(){	
		var height = elementContainer.style.height;
		if(height != "auto"){
			elementContainer.style.borderWidth = "4px";
			elementContainer.style.height = "auto";
		}else{
			elementContainer.style.height = "0px";
			elementContainer.style.borderWidth = "0px";
		}
	});
}

//on drag start
function startDrag(element,ev){
	var imgSource = "/website-creator/"+element.firstChild.getAttribute("src");
	ev.dataTransfer.setData("img-src",imgSource);
}