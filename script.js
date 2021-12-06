const fullimgbox = document.getElementById("fullimgbox"),
fullimg = document.getElementById("fullimg");

function openfullimg(reference){
    fullimgbox.style.display = "flex";
    fullimg.src = reference
}
function closeImg(){
    fullimgbox.style.display = "none";
}

