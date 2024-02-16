let elBtn = document.querySelector(".btn")
let card = document.querySelector(".card")
let record = new webkitSpeechRecognition()

record.lang = "uz-UZ"

elBtn.addEventListener("click", function(){
    record.start()
    console.log("start");
    card.classList.add("yashil")
})

record.onresult = function(evt){
    const result = evt.results[0][0].transcript;
    console.log(result);
    if(result == "yashil"){
    }
}

record.onend = function(){
    console.log("finish");
    card.classList.remove("yashil")
}