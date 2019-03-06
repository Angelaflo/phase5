function nextImage(el) {
	if (el.src.match("images/button.PNG")){
		 el.src = "images/cat.PNG";
	} 
}

function refreshPage(){
    window.location.reload();
} 