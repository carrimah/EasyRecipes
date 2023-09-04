let credit = document.querySelector("#credit");
let recipeSlide = document.querySelector("#recipe-slide");
let backBtn = document.querySelector("#back-btn");
let forwardBtn = document.querySelector("#fwd-btn");

function setCredit(recipe){
    if(recipe == 1){
        credit.innerHTML="Tazo Tea"
    }
}

function setRecipe(dir){
    if(dir == 1){
        recipeSlide.style.marginLeft = "-200vw";
    }
}

forwardBtn.addEventListener("click", ()=>{setRecipe(1);});

setCredit(credit.getAttribute("data-recipe"));

