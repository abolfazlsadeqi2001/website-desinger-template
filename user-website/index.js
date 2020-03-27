function dragOverHeaderAndFooter(element) {
	element.style.background = "lime";
}

function dragLeaveHeaderAndFooter(element) {
	element.style.background = element.getAttribute("defaultbackground");
}

function dropHeaderAndFooter(element, event) {
	var imgSrc = "url(" + "../" + event.dataTransfer.getData("img-src") + ")";
	element.style.backgroundImage = imgSrc;
	element.setAttribute("defaultbackground", imgSrc);
}