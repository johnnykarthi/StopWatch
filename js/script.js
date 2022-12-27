
let sec = 0;
let min = 0;
let millisec = 0;

var min_value = document.querySelector('.min');
var sec_value = document.querySelector('.sec');
var millisec_value = document.querySelector('.millisec');

var btn_start = document.querySelector(".btn-start");
var btn_stop = document.querySelector(".btn-stop");
var btn_reset = document.querySelector(".btn-reset");
let interval;
btn_start.addEventListener("click", ()=>{
    interval = setInterval(startTimer,10);
    document.getElementById('sha').classList.add('timer-circle1');
});
btn_stop.addEventListener("click", ()=>{
    clearInterval(interval);
});

btn_reset.addEventListener("click", ()=>{
    clearInterval(interval);
    sec = 0;
    min=0;
    millisec=0;
    sec_value.innerHTML = "00";
    min_value.innerHTML = "00";
    millisec_value.innerHTML = "00";
    document.getElementById('sha').classList.remove('timer-circle1');
});

function startTimer() {
    millisec++;
    
    if (millisec > 99) {
        sec++;
        millisec = 0;
        if (sec > 59) {
            min++;
            sec = 0;
            if (min < 10) {
                min_value.innerHTML = "0" + min;
            }
            else {
                min_value.innerHTML = min;
            }
        }
        if (sec < 10) {
            sec_value.innerHTML = "0" + sec;
        }
        else {
            sec_value.innerHTML = sec;
        }
    }
    if (millisec < 10) {
        millisec_value.innerHTML = "0" + millisec;
    }
    else {
        millisec_value.innerHTML = millisec;
    }

    
}