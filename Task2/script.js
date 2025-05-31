

let time = document.querySelector("#time");

let startbtn = document.querySelector(".start");
let resetbtn = document.querySelector(".reset");
let lapsbtn = document.querySelector(".laps");
let stopbtn = document.querySelector(".stop");
let count = 1;

let hrs = 0, mins = 0, secs = 0, mss = 0;
let interval;

const start = () => {
    if (interval) return;
    interval = setInterval(() => {
        mss++;
        if (mss === 100) {
            secs++;
            mss = 0;
        }
        if (secs === 60) {
            mins++;
            secs = 0;
        }
        if (mins === 60) {
            hrs++;
            mins = 0;
        }

        let hr = `${hrs}`.padStart(2, "0");
        let min = `${mins}`.padStart(2, '0');
        let sec = `${secs}`.padStart(2, "0");
        let ms = `${mss}`.padStart(2, '0');

        time.innerText = `${hr}:${min}:${sec}:${ms}`;
    }, 10);
};

startbtn.addEventListener('click', () => {
    clearInterval(interval);
    start();
    startbtn.disabled = true;
    stopbtn.disabled = false;
    resetbtn.disabled = false;
    lapsbtn.disabled=false;

});

resetbtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    hrs = 0;
    mins = 0;
    secs = 0;
    mss = 0;
    time.innerText = "00:00:00:00";
    startbtn.disabled = false;
    stopbtn.disabled = false;
    resetbtn.disabled = true;
    lapsbtn.disabled=true;
    count=1;
     document.querySelector(".lap").innerHTML='';
   
});


stopbtn.addEventListener('click', () => {

    clearInterval(interval);
    interval = null;
    startbtn.disabled = false;
    stopbtn.disabled = true;
})

lapsbtn.addEventListener('click', () => {
    let hr = `${hrs}`.padStart(2, "0");
    let min = `${mins}`.padStart(2, '0');
    let sec = `${secs}`.padStart(2, "0");
    let ms = `${mss}`.padStart(2, '0');

    let counts=`${count}`.padStart(2,'0');
   let laps = `${counts} : ${hr}:${min}:${sec}:${ms}`;

   let lap=document.createElement("p");
   lap.innerText=laps;

   document.querySelector(".lap").appendChild(lap);
   
    count++;
})