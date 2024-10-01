function correctDate(date){
    return date < 10 ? "0"+date : date;
}


function sale(){
    let saleDate = new Date (2024, 9, 25)
    let currentDate = new Date()
    let date = saleDate - currentDate
    let day = Math.floor(date/(24*60*60*1000))
    let hours = Math.floor((date%(24*60*60*1000))/(60*1000*60))
    let minutes = Math.floor((date%(60*60*1000))/(60*1000))
    let timeValue = document.getElementsByClassName("date")
    timeValue[0].innerHTML=correctDate(day)
    timeValue[1].innerHTML=correctDate(hours)
    timeValue[2].innerHTML=correctDate(minutes)
    

    if(date <= 0){
    timeValue[0].innerHTML="00"
    timeValue[1].innerHTML="00"
    timeValue[2].innerHTML="00"
    
    }
}
sale()
setInterval(()=>{
    sale()
},1000)




let wrapper = document.querySelector(".wrapper")
let popUp = document.querySelector(".wrapper .popUp")
let thankyoupage = document.querySelector(".wrapper .thankyoupage")
let btns = document.querySelectorAll("section button")

let formBtn = document.querySelector(".form button")
let usernamee = document.getElementsByName("usernamee")[0]
let userphone = document.getElementsByName("userphone")[0]

btns.forEach( btn =>{
    btn.addEventListener('click', showpopUp)
})

wrapper.addEventListener('click', hidepopUp)


function showpopUp(){
    wrapper.style.display = "flex"
    popUp.style.display = "flex"
    thankyoupage.style.display = "none"
}

function hidepopUp(){
    let elem = event.target

    if ( elem == wrapper) {
        wrapper.style.display = "none"
    }
}

formBtn.addEventListener("click", sendForm)

function sendForm(){
    event.preventDefault()
   if(usernamee.value.length > 1){
    if(userphone.value.length == 13){
        showthankyoupage()
    }
   }
}        


function showthankyoupage(){
    popUp.style.display = "none"
    thankyoupage.style.display = "flex"
}

