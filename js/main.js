let progressesSpans = document.querySelectorAll(
  ".skils .skils-holder .skil .progress span"
);
let skilsSection = document.querySelector(".skils");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skilsSection.offsetTop - 300) {
    progressesSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else if (window.screenY < skilsSection.offsetTop - 300) {
    progressesSpans.forEach((span) => {
      span.style.width = "0px";
    });
  }
});

// start stats
let statsNumbers = document.querySelectorAll(".stats .box span");
let statsSection = document.querySelector(".stats");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop - 300) {
    if (!started) {
      statsNumbers.forEach((num) => {
        countUp(num);
      });
    }
    started = true;
  }
};
function countUp(ele) {
  let goal = ele.dataset.goal;
  let duration = 10;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
      if (ele.classList.contains("kash")) {
        ele.append("K");
      }
    }
  }, duration / goal);
}
// end stats

// start events
let spans = document.querySelectorAll(".events .text .date span");
let eventsSection = document.querySelector(".events .info");
let selectedTime = new Date("Dec 31, 2021 23:59:59").getTime();
console.log(eventsSection);
let counter = setInterval(() => {
  let currentTime = new Date().getTime();
  if (selectedTime > currentTime) {
    let differ = selectedTime - currentTime;
    let days = Math.trunc(differ / (1000 * 60 * 60 * 24));
    let hours = Math.trunc((differ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.trunc((differ % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.trunc((differ % (1000 * 60)) / 1000);
    spans[0].innerHTML = days < 10 ? `0${days}` : days;
    spans[1].innerHTML = hours < 10 ? `0${hours}` : hours;
    spans[2].innerHTML = mins < 10 ? `0${mins}` : mins;
    spans[3].innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (differ < 0) {
      clearInterval(counter);
      let h1 = document.createElement("h1");
      h1.append("CONGRATOLATIONS 2022");
      h1.style.cssText = `
        font-size: 60px;
        color: #3f51b5;
        padding: 20px;
        text-align: center;
      `;
      eventsSection.before(h1);
    }
  }
}, 1000);
// end events
let h1 = document.createElement("h1");
h1.append("CONGRATOLATIONS 2022");
h1.style.cssText = `
  font-size: 60px;
  color: #3f51b5;
  padding: 20px;
  text-align: center;
`;

