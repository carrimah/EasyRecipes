/*BRAND*/
let brand = document.querySelectorAll(".brand");

brand.forEach((brand) => {
    brand.addEventListener("click", ()=>{
        if(brand.classList.contains("page-brand")){
            document.location = "../index.html";
        }
        else{
            document.location = "./index.html";
        }
    })
});
/*DRAWER*/
let drawer = document.querySelector("#drawer");
let menu = document.querySelector("#menu");
let drawerOpen = false;

function toggleDrawer(){
    if(drawerOpen){
        drawer.style.display = "none";;
        drawerOpen = false;
    }
    else{
        drawer.style.display = "flex";
        drawerOpen = true;
    }
}

menu.addEventListener("click", ()=>{toggleDrawer();})

