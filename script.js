function ClockRunner() {
  let d = new Date();
  let hours = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  let p = "PM";
  if (hours > 12) {
    hours -= 12;
    p = "pm";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  let c = hours + ":" + minute + ":" + second + " " + p;

  let t = (document.getElementById("myclock").textContent = c);

  setTimeout(ClockRunner, 1000);
}

ClockRunner();
