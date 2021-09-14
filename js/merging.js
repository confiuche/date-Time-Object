//Question three
// crate online payment that pair different users.

// Your job is to crate a script that will set the time limit at what 
// point when the person is ask to make the payment, 
// and the time the privilege is to elapsed

// i.e 48 hours is given to make the payment.

// If the user fail to make the payment before 48hours. 
// Display an error message that user has been blocked 
// and the order has been forwarded to another user


let userOneTimeStart = new Date("Septemer 16, 2021 3:59:59")
console.log(userOneTimeStart) 



let count1 = setInterval(function() {

    let userOneTimeEnd = new Date().getTime()
//console.log(userOneTimeEnd)

let userOneExp = userOneTimeStart - userOneTimeEnd
//console.log(userOneExp)

let days = Math.floor(userOneExp / (1000 * 60 * 60 * 24));
//console.log(days)
  let hours = Math.floor((userOneExp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //console.log(hours)
  let minutes = Math.floor((userOneExp % (1000 * 60 * 60)) / (1000 * 60));
  //console.log(minutes)
  let seconds = Math.floor((userOneExp % (1000 * 60)) / 1000);
  //console.log(seconds)

  document.getElementById("payment").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (userOneExp < 0) {
    clearInterval(count1);
    document.getElementById("payment").innerHTML = "You are blocked and Order has been forwarded to another person";
  }

  if(userOneExp === 0){
      clearInterval(count1)
  }
  let userTwoTimeStart = new Date("Septemer 16, 2021 4:00:00")
//console.log(userTwoTimeStart) 



let count2 = setInterval(function() {

    let userTwoTimeEnd = new Date().getTime()
//console.log(userOneTimeEnd)

let userTwoExp = userTwoTimeStart - userTwoTimeEnd
//console.log(userTwoExp)

let days = Math.floor(userTwoExp / (1000 * 60 * 60 * 24));
//console.log(days)
  let hours = Math.floor((userTwoExp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //console.log(hours)
  let minutes = Math.floor((userTwoExp % (1000 * 60 * 60)) / (1000 * 60));console.log(minutes)
  let seconds = Math.floor((userTwoExp % (1000 * 60)) / 1000);
  //console.log(seconds)

//   document.getElementById("").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";


}, 1000)

}, 1000);