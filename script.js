
var bugSmashed=0;
var bug=document.getElementById("bug");
var canvas=document.getElementById("canvas");
var interval=2500;
var automove=setInterval(placeBug, interval);
var getScore=function() {document.getElementById("scoreBox").innerHTML="Score:   " + bugSmashed + ";     Interval:   " + interval;}



function placeBug(){
    const BUFFER=0.85;

    canvas.removeChild(bug);
     bug=document.createElement("img");
    bug.src="images/bug.png";
    bug.style.display="block";
    bug.style.height="30px";
    bug.style.width="30px";
    bug.style.position="absolute";
    bug.addEventListener("click", levelUp, false);
    bug.style.cursor="pointer";
    bug.style.top=(canvas.offsetTop-bug.offsetHeight+(Math.random()*BUFFER)*canvas.offsetHeight)+ "px";
    bug.style.left=(canvas.offsetLeft-bug.offsetWidth+(Math.random()*BUFFER)*canvas.offsetWidth) + "px";
    canvas.appendChild(bug);
}

function levelUp(){
    clearInterval(automove);
    interval-=250;
    bugSmashed++;
    getScore();
    automove= setInterval(placeBug, interval);
}

function resetScore(){
    clearInterval(automove);
    bugSmashed=0;
    interval=2500;
    getScore();
    automove= setInterval(placeBug, interval);
}

function resetSpeed(){
    clearInterval(automove);
    interval=2500;
    getScore();
    automove= setInterval(placeBug, interval);    
}

document.getElementById("resetScore").addEventListener("click", resetScore, false);
document.getElementById("resetSpeed").addEventListener("click",resetSpeed, false);