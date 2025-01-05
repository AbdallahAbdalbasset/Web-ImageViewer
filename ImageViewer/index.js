var imageNames = ["banana", "lemon", "mango", "orange", "strawberry", "watermelon"];
var img1 = document.getElementById("myImage");
var idx = 0;
var interval;
function modifyIdx(idx, val){
    idx+=val;
    idx%=imageNames.length;
    idx+=imageNames.length;
    idx%=imageNames.length;

    return idx;
}
function nextImage(){
    idx = modifyIdx(idx, 1);

    let path = 'images/'+imageNames[idx]+'.jpeg';
    img1.src = path;
}

function previousImage(){
    idx = modifyIdx(idx, -1);
    
    let path = 'images/'+imageNames[idx]+'.jpeg';
    img1.src = path;
}

function play(){
    if(interval)return;
    interval = setInterval(nextImage, 1000);
}

function stop(){
    if(!interval) return;
    clearInterval(interval);
    interval = undefined;
}

