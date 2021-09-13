// let days = eval(prompt("Enter Day"))
// let month = eval(prompt("Enter Month"))
let year = eval(prompt("Enter Year"))



dt = new Date()
console.log(dt)

age = dt.getFullYear() - year

document.getElementById("age").innerHTML = "You are " +age+ " Years old"





console.log(dt.getFullYear())
console.log(dt.getMonth()+1)
console.log(dt.getDay())
console.log(dt.getDate())
console.log(dt.getTime())
 curYear = dt.getFullYear();
// day = prompt("enter month")
//age = dt.getFullYear() - year;
//console.log("You are "+age+" Years Old")
