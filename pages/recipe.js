let expand = document.querySelector(".expand-recipe");

expand.addEventListener("click", (e)=>{
    e.preventDefault();
    let dest = document.querySelector(".recipe-box");
    dest.scrollIntoView({behavior: 'smooth'});
});