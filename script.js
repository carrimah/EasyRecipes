let credit = document.querySelector("#credit");
let slides = document.querySelector("#slides");
let forwardBtn = document.querySelector("#fwd-btn");
let backBtn = document.querySelector("#back-btn");
let currSlide = 1;

function setCredit(recipe){
    if(recipe == 1){
        credit.innerHTML="Tazo Tea"
    }
}

function getCurr(){
    return Number(document.querySelector(".slide-curr").getAttribute("data-slide"));
}

function setCurr(){
    let old = document.querySelector(".slide-curr");
    old.classList.remove("slide-curr");
    let curr = document.querySelector("[data-slide=" + "\"" + currSlide + "\"]");
    curr.classList.add("slide-curr");
}

function setSlide(dir){
    currSlide = getCurr();
    if(dir == 1 && currSlide < 4){
        console.log("BEEEEPs")
        slides.style.marginLeft =  (-100 * (currSlide)) + "vw";
        currSlide += 1; setCurr();
    }
    else if(dir == 0 && currSlide != 1){
        if(currSlide == 2){
            slides.style.marginLeft = "0vw";
        }else{slides.style.marginLeft = (-25 * (currSlide)) + "vw";}
        currSlide -= 1; setCurr();
    }
}

forwardBtn.addEventListener("click", ()=>{setSlide(1);});
backBtn.addEventListener("click", ()=>{setSlide(0);})

setCredit(credit.getAttribute("data-recipe"));

