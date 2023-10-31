let hr = mn = sg = ms = "0" + 0, starTime;

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const reloadButton = document.querySelector(".reload");

startButton.addEventListener("click", starting);
stopButton.addEventListener("click", stoping);
reloadButton.addEventListener("click", reloading);

function starting(){
    startButton.classList.add("on");

    starTime = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 100){
            sg++;
            sg = sg < 10 ? "0" + sg : sg;
            ms = "0" + 0;
        } 

        if(sg == 60){
            mn++;
            mn = mn < 10 ? "0" + mn : mn;
            sg = "0" + 0;
        }

        if(mn == 60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            mn = "0" + 0;
        }

        sendValue();
    }, 10);
}

function stoping(){
    startButton.classList.remove("on");
    clearInterval(starTime);
}


function reloading(){
    startButton.classList.remove("on");
    clearInterval(starTime);
    hr = mn = sg = ms = "0" + 0;
    sendValue();
}

function sendValue(){
    document.querySelector('.miliseconds').innerHTML = ms;
    document.querySelector('.seconds').innerHTML = sg;
    document.querySelector('.minutes').innerHTML = mn;
    document.querySelector('.hour').innerHTML = hr;
}