
let name = prompt("Adınızı girin!")
let text = document.querySelector("#myName");
let hours = document.querySelector("#myClock");
const weekday  = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

text.innerHTML = name


function showTime() {
    let date = new Date()
    hours.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${weekday[date.getDay()]}`
}

setInterval(showTime, 1000)
