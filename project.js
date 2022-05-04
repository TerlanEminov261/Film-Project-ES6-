const form = document.querySelector("#film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");



// Butun Eventler 

eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFromToStorage();
        films.forEach(function(film){
            UI.addFilmUI(film)
        });
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",deleteAllFilms);

    
}

function addFilm(e){
    const title = titleInput.value;
    const director = directorInput.value;
    const url = urlInput.value;

    if(title === "" || director === "" || url === ""){
        // Xeta
        UI.showAlert("danger","Butun alanlari doldurun...");
    }   
    else{
        // Yeni Film
        const newFilm = new Film(title,director,url);
        //film ekle
        Storage.addFilmToStorage(newFilm);
        UI.addFilmUI(newFilm); // Arayuze film ekleme
        UI.showAlert("success","Film basari ile eklendi...");
    }

    UI.clearElement(titleInput,urlInput,directorInput);
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.showAlert("success","Film Basari ile silindi...")
    }
}

function deleteAllFilms(){
    if(confirm("Emin misiniz ?"));
    UI.clearAllFilmsFromStorage();
    Storage.clearAllFilmsFromStorage();
}