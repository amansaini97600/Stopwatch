const startTimeEle = document.querySelector(".startBtn");
const stopTimeEle = document.querySelector(".stopBtn");
const resetTimeEle = document.querySelector(".resetBtn");
const getTimeEle = document.querySelector(".gettimeBtn");
const clearTimeEle = document.querySelector(".clearBtn");
const timeEle = document.querySelector("#time");
const insertGetTime = document.querySelector(".getTime");
let milSecond = 0;
let second = 0;
let minute = 0;
let intervalId;

//! start time function
const startTime = () => {
  startTimeEle.style.backgroundColor = "greenyellow";
  getTimeEle.style.backgroundColor = "white";
  resetTimeEle.style.backgroundColor = "white";
  stopTimeEle.style.backgroundColor = "white";
  intervalId = setInterval(() => {
    if (milSecond === 59) {
      second++;
      milSecond = -1;
    } else if (second === 60) {
      minute++;
      second = 0;
    }
    milSecond++;
    if (milSecond < 10) {
      timeEle.innerText = `${minute}:${second}:0${milSecond}`;
    } else {
      timeEle.innerText = `${minute}:${second}:${milSecond}`;
    }
  }, 1000 / 60);
};

//! stop time function
const stoptTime = () => {
  stopTimeEle.style.backgroundColor = "greenyellow";
  startTimeEle.style.backgroundColor = "white";
  resetTimeEle.style.backgroundColor = "white";
  getTimeEle.style.backgroundColor = "white";
  clearInterval(intervalId);
};

//! get time function
const getTime = () => {
  resetTimeEle.style.backgroundColor = "white";
  let liElemetn = document.createElement("li");
  liElemetn.classList.add("insertGetTime");
  if (minute >= 1) {
    liElemetn.innerText = `The stop time is ${minute}:${second}:${milSecond}ms`;
  } else if (second >= 1) {
    liElemetn.innerText = `The stop time is ${second}:${milSecond}ms`;
  } else {
    liElemetn.innerText = `The stop time is ${milSecond}ms`;
  }
  insertGetTime.append(liElemetn);
};

//! reset time function

const resetTime = () => {
  stopTimeEle.style.backgroundColor = "white";
  startTimeEle.style.backgroundColor = "white";
  resetTimeEle.style.backgroundColor = "greenyellow";
  getTimeEle.style.backgroundColor = "white";
  second = 0;
  second = 0;
  minute = 0;
  timeEle.innerText = `00:00:00`;
  clearInterval(intervalId);
};

//! clear time function

const clearTime = () => {
  stopTimeEle.style.backgroundColor = "white";
  startTimeEle.style.backgroundColor = "white";
  resetTimeEle.style.backgroundColor = "greenyellow";
  clearTimeEle.style.backgroundColor = "greenyellow";
  getTimeEle.style.backgroundColor = "white";
  location.reload();
};

startTimeEle.addEventListener("click", startTime);

stopTimeEle.addEventListener("click", stoptTime);

getTimeEle.addEventListener("click", getTime);

clearTimeEle.addEventListener("click", clearTime);

resetTimeEle.addEventListener("click", resetTime);
