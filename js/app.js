const form = document.querySelector(".inp");
const amount = document.getElementById("amount");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let minute = parseInt(amount.value);
  let second = 60;

  function sweetAlert() {
    swal({
      title: "Warning",
      text: "Set minutes between 0 - 25",
      icon: "warning",
      button: "OK"
    })
  }

  if (isNaN(minute) || minute < 0 || minute > 25) {
    sweetAlert();
  } else {
    let countdown = setInterval(timer, 1000);

    function timer() {
      if (minute - 1 < 0) {
        document.querySelector(".mins").innerHTML = 0;
      } else {
        document.querySelector(".mins").innerHTML = minute - 1;
      }
      document.querySelector(".secs").innerHTML = second;

      second--;

      if (second == 0) {
        minute--;
        second = 60;

        if (minute <= 0) {
          stopTimer();
        }
      }
    }

    function stopTimer() {
      clearInterval(countdown);
      document.querySelector(".mins").innerHTML = "00";
      document.querySelector(".secs").innerHTML = "00";
      play();
    }
  } 

  function play() {
    let audio = new Audio("./audio/beep.mp3");
    audio.play();
  }
});