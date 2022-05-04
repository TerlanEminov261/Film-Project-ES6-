class Storage {
    static addFilmToStorage = function (newFilm) {
        let films = this.getFromToStorage();

        films.push(newFilm);

        localStorage.setItem("films", JSON.stringify(films));
    }

    static getFromToStorage = function () {
        let films;

        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }

    static deleteFilmFromStorage = function (filmTitle) {
        let films = this.getFromToStorage();
        // Splice
        films.forEach(function (film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            };
        });

        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearAllFilmsFromStorage = function () {

        localStorage.removeItem("films");
    }
}