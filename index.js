/*SLIDES*/
let credit = document.querySelector("#credit");
let slides = document.querySelector("#slides");
let forwardBtn = document.querySelector("#fwd-btn");
let backBtn = document.querySelector("#back-btn");
let currNum = document.querySelector("#curr-num");
let currSlide = 1;

function setCredit(){
    credit.setAttribute("data-recipe", currSlide);
    if(currSlide == 1){
        credit.innerHTML="Tazo Tea"
    }
    else if(currSlide == 2){
        credit.innerHTML="Carrima"
    }
    else if(currSlide == 3){
        credit.innerHTML="Carrima"
    }
}

function setNum(){
    let test = currSlide.toString().padStart(2, '0');
    currNum.innerHTML = test;
}

function getCurr(){
    return Number(document.querySelector(".slide-curr").getAttribute("data-slide"));
}

function setCurr(){
    let old = document.querySelector(".slide-curr");
    old.classList.remove("slide-curr");
    let curr = document.querySelector("[data-slide=" + "\"" + currSlide + "\"]");
    curr.classList.add("slide-curr");
    setCredit();
    setNum();
}

function setSlide(dir){
    currSlide = getCurr();
    if(dir == 1 && currSlide < 3){
        slides.style.marginLeft =  (-100 * (currSlide)) + "vw";
        currSlide += 1; setCurr();
    }
    else if(dir == 0 && currSlide != 1){
        if(currSlide == 2){
            slides.style.marginLeft = "0vw";
        }else{
            console.log(currSlide)
            slides.style.marginLeft = (-100 * (currSlide-2)) + "vw";
        }
        currSlide -= 1; setCurr();
    }
}

forwardBtn.addEventListener("click", ()=>{setSlide(1);});
backBtn.addEventListener("click", ()=>{setSlide(0);});

/*RECIPE*/
let recipes = document.querySelectorAll(".slide");
function getRecipe(){
    let curr = document.querySelector(".slide-curr");
    let loc = "./pages/" + curr.getAttribute("data-recipe");
    document.location = loc;
}

recipes.forEach(recipe =>{
    recipe.addEventListener("click", ()=>{getRecipe();})
})

setCredit();