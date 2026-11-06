// WS05 student starter / opiskelijan aloituspohja
// Complete the TODOs. This file is intentionally unfinished.
// Täydennä TODO-kohdat. Tämä tiedosto on tarkoituksella keskeneräinen.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();
   nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";

    // Välilyöntien poisto
    const name = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();

    // Validointi
    let valid = true;
 
    if (name === "") {
        nameError.textContent = "Anna eläimen nimi.";
        valid = false;
    }
 
    if (species === "") {
        speciesError.textContent = "Anna eläimen laji.";
        valid = false;
    }
 
    if (note.length < 1 || note.length > 150) {
        noteError.textContent = "Hoitomuistion pituuden pitää olla 1–150 merkkiä.";
        valid = false;
    }

     // Tuloksen näyttäminen ja tallennus
    if (valid) {
        formResult.textContent = "Lisätty: " + name + " / " + species + " / " + note;
        console.log(name, species, note);

        // Harjoitus 3: luodaan olio ja tallennetaan se localStorageen
        const animal = { name: name, species: species, note: note };
        localStorage.setItem("ws05Animal", JSON.stringify(animal));
    }
});


// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Muutetaan syötteet numeroiksi
    const yearlyFee = Number(animalType.value);
    const years = Number(yearsInput.value);
 
    // Hyväksytään vain positiiviset kokonaiset vuodet
    if (!Number.isInteger(years) || years < 1) {
        cost.textContent = "Anna vuosien määrä positiivisena kokonaislukuna.";
        discountMessage.textContent = "";
        return;
    }
 
    // Lasketaan hinta
    let total = yearlyFee * years;
    let message = "Ei alennusta.";
 
    // Yli 2 vuotta: 20 % alennus
    if (years > 2) {
        total = total * 0.8;
        message = "20 % alennus.";
    }
 
    // Vähintään 5 vuotta: -5 €
    if (years >= 5) {
        total = total - 5;
        message = "20 % alennus ja lisäksi 5 € alennus.";
    }
 
    // Näytetään tulos kahdella desimaalilla
    cost.textContent = "Yhteensä: " + total.toFixed(2) + " €";
    discountMessage.textContent = message;

});

// Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
    const saved = localStorage.getItem("ws05Animal");

    // Jos mitään ei ole tallennettu
    if (saved === null) {
        savedAnimal.textContent = "Ei vielä tallennettua eläintä";
        return;
    }
 
    // Muutetaan teksti takaisin olioksi ja näytetään tiedot
    const animal = JSON.parse(saved);
    savedAnimal.textContent = "Nimi: " + animal.name + ", laji: " + animal.species + ", muistio: " + animal.note;

}

loadButton.addEventListener("click", loadAnimal);
clearButton.addEventListener("click", function () {
     localStorage.removeItem("ws05Animal");
    loadAnimal();
});

// Ladataan tallennettu eläin, kun sivu avautuu
loadAnimal();