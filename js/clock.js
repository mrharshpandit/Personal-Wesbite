function Clock() {
    let digitalClock = new Date();
    let digitalHour = digitalClock.getHours();
    let digitalMin = digitalClock.getMinutes();
    let digitalSec = digitalClock.getSeconds();
  
    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let ampm = document.getElementById("ampm");
  
    if (digitalSec < 10) {
      digitalSec = "0" + digitalSec;
    }
    if (digitalMin < 10) {
      digitalMin = "0" + digitalMin;
    }
    if (digitalHour > 12) {
      digitalHour = digitalHour - 12;
    }
    if (digitalHour < 10) {
      digitalHour = "0" + digitalHour;
    }
    if (digitalHour == 0) {
      digitalHour = "12";
    }
  
    if (digitalHour < 12) {
      ampm.innerHTML = "PM";
    } else {
      ampm.innerHTML = "AM";
    }
  
    hour.innerHTML = digitalHour;
    min.innerHTML = digitalMin;
    sec.innerHTML = digitalSec;
  }
  
  setInterval(() => {
    Clock();
  });
  
  let dl_mode_btn = document.getElementById("dl_mode_btn");
  let dl_mode_btn_ball = document.getElementById("dl_mode_btn_ball");
  
  dl_mode_btn.addEventListener("click", () => {
    dl_mode_btn_ball.classList.toggle("move");
  });
  
  dl_mode_btn.addEventListener("click", () => {
    document.body.classList.toggle("dl-mode");
  });
  
  let alarm = new Audio("download.mp3");
  
  let hourset = document.getElementById("hourset");
  let minuteset = document.getElementById("minuteset");
  let secondset = document.getElementById("secondset");
  let warn_texts = document.getElementById("warn_texts");
  let notify = document.getElementById("notify");
  let stopAlarm = document.getElementById("stopAlarm");
  
  let setAlarm = document.getElementById("setAlarm");
  
  let check = document.getElementById("check");
  let warn = document.getElementById("warn");
  
  setAlarm.addEventListener("click", () => {
    if (minuteset.value || hourset.value || secondset.value) {
      notify.style.transform = "translateY(40px)";
      setTimeout(() => {
        notify.style.transform = "translateY(400px)";
      }, 3000);
      check.style.display = "block";
      warn.style.display = "none";
      warn_texts.innerHTML = "YOUR ALARM SET SUCCESSFULLY";
    } else if (
      secondset.value == -1 ||
      hourset.value == -1 ||
      minuteset.value == -1
    ) {
      notify.style.transform = "translateY(40px)";
      warn_texts.innerHTML = "PLEASE ENTER A VALID NUMBER!";
      check.style.display = "none";
      warn.style.display = "block";
    } else if (
      hourset.value == 0 &&
      minuteset.value == 0 &&
      secondset.value == 0
    ) {
      notify.style.transform = "translateY(40px)";
      warn_texts.innerHTML = "PLEASE ENTER ATLEAST ONE NUMBER!";
      check.style.display = "none";
      warn.style.display = "block";
    }
    if (secondset.value) {
      setTimeout(() => {
        alarm.play();
      }, secondset.value * 1000);
    } else if (minuteset.value) {
      setTimeout(() => {
        alarm.play();
      }, minuteset.value * 60000);
    } else if (hourset.value) {
      setTimeout(() => {
        alarm.play();
      }, hourset.value * 3600000);
    }
  });
  
  stopAlarm.addEventListener("click", () => {
    alarm.pause();
  });
  