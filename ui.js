class UI {
    static addFilmUI = function (newFilm) {

        const tableList = document.querySelector("#films");

        tableList.innerHTML += `
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        
        `;



    }


    static clearElement = function (element1, element2, element3) {
        element1.value = "",
            element2.value = "",
            element3.value = ""
    };

    static showAlert = function (type, message) {
        const cardBody = document.querySelectorAll(".card-body")[0];
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;

        cardBody.appendChild(alert);

        setTimeout(function () {
            alert.remove();
        }, 1000)

    }

     static deleteFilmUI = function (element) {
        element.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromStorage = function () {
        const filmList = document.querySelector("#films");


        while (filmList.firstElementChild !== null) { // Child Oldugu surece
            filmList.firstElementChild.remove();
        }
    }
}