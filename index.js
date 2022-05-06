import { CreateBeer, beers } from "./Beers.js"

//la div qui contient toutes les card
let display = document.querySelector("#display");

//lien pour handling errors toast
const textToast = document.getElementById("textError");
const toast = new bootstrap.Toast(document.querySelector('#errorToast'), {
    autohide: false
});

//si il y a une erreur il montre une erreur.
if(beers === undefined) {
    toast.show();
    textToast.innerHTML = "Error at request Axios"; 
}

// cree les card avec toutes le biere
if (beers) {
    for (let value of beers){
        display.appendChild(CreateBeer(value));
    }
} else {
    console.log("Don't have beers for the moment")
}


//Contient le modal
let modal = document.getElementById("modalBeer");

//Prend la value du button, correspond au id de la biere. Il cherche la biere puis montre l'info dans le modal.
modal.addEventListener("show.bs.modal", (e) => {
    let buttons = e.relatedTarget;

    let idButton = buttons.getAttribute("data-bs-value");

    let modalname = modal.querySelector("#name");

    let modalMaker = modal.querySelector("#maker");
    let modalDate = modal.querySelector("#date");
    let modalTagLine = modal.querySelector("#tagline");
    let modalTips = modal.querySelector("#tips");
    let modalAbv = modal.querySelector("#abv");

    const id = beers.find(element => element.id == idButton)
    console.log(id);
    modalname.textContent = id.name;

    modalMaker.textContent = "Maker: " + id.contributed_by;
    modalDate.textContent = "Date: " + id.first_brewed;
    modalTagLine.textContent = "Tagline: " + id.tagline;
    modalTips.textContent = "Tips: " + id.brewers_tips;
    modalAbv.textContent = "Alcohol Volume: " + id.abv + "%";
})