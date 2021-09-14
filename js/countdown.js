//Question two
// Crate a JavaScript application that will display how many days, 
//months and year left for buhari to leave the office

let countDown = new Date("May 29, 2023 15:37:25")

let count = setInterval(function() {

  let currentDate = new Date().getTime();

  let timeDiff = countDown - currentDate;

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById("buhari").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (timeDiff < 0) {
    clearInterval(count);
    document.getElementById("buhari").innerHTML = "Pls Buhari your time in the has EXPIRED as President of. \n Republic of Nigeria Vacate the office as soon as possible";
  }
}, 1000);
