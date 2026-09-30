// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");

});

// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// -------------------------------------------------- EXAMPLE 4 CSS
// -------------------------------------------------- EXAMPLE 4 CSS

const heading = document.querySelector("#taskOneHeading");
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    heading.classList.toggle("highlight");
});

// -------------------------------------------------- TEHTÄVÄ 1: ELÄINTEKSTI
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Tiikerit ovat suurimpia kissaeläimiä.";
});

// -------------------------------------------------- TEHTÄVÄ 2: ELEMENTTIEN LUONTI
const animalContent = document.querySelector("#animalContent");

const dayHeading = document.createElement("h3");
dayHeading.textContent = "Päivän eläin";
dayHeading.classList.add("animal-heading");

const dayText = document.createElement("p");
dayText.textContent = "Pandat syövät lähes pelkästään bambua.";

const dayImage = document.createElement("img");
dayImage.src = "images/panda.png";
dayImage.alt = "Panda";

animalContent.append(dayHeading, dayText, dayImage);

const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});

showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
});


// -------------------------------------------------- TEHTÄVÄ 3: ELÄINVALIKKO
const animals = {
    elephant: {
        name: "Elefantti",
        image: "images/elephant.png",
        alt: "Elefantti",
        description: "Elefantit ovat maailman suurimpia maaeläimiä."
    },
    tiger: {
        name: "Tiikeri",
        image: "images/tiger.png",
        alt: "Tiikeri",
        description: "Tiikerit ovat raidallisia ja melko rauhallisia eläimiä."
    },
    penguin: {
        name: "Pingviini",
        image: "images/penguin.png",
        alt: "Pingviini",
        description: "Pingviinit ovat lentokyvyttömiä lintuja, jotka uivat taitavasti."
    },
    panda: {
        name: "Panda",
        image: "images/panda.png",
        alt: "Panda",
        description: "Pandat syövät lähes pelkästään bambua."
    }
};

animalSelect.addEventListener("change", function () {
    const animal = animals[animalSelect.value];

    animalName.textContent = animal.name;
    animalImage.src = animal.image;
    animalImage.alt = animal.alt;
    animalDescription.textContent = animal.description;
});

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});


// -------------------------------------------------- TEHTÄVÄ 4: HAVAINNOT
const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = observationAnimal.value.trim();
    const location = observationLocation.value.trim();
    const date = observationDate.value;

    if (animal === "" || location === "" || date === "") {
        alert("Täytä kaikki kentät!");
        return;
    }

    const tr = document.createElement("tr");

    const tdAnimal = document.createElement("td");
    tdAnimal.textContent = animal;

    const tdLocation = document.createElement("td");
    tdLocation.textContent = location;

    const tdDate = document.createElement("td");
    tdDate.textContent = date;

    tr.append(tdAnimal, tdLocation, tdDate);
    addDeleteButton(tr);
    observationTableBody.append(tr);

    animalForm.reset();
});

// Bonus tehtävät: //

// -------------------------------------------------- BONUS 1: TEHTÄVÄ 1
const task1Buttons = document.querySelector(".buttons"); 

// Lause lisätty alkuperäisen tekstin perään
const addSentenceButton = document.createElement("button");
addSentenceButton.textContent = "Lisää lause";
addSentenceButton.addEventListener("click", function () {
    animalText.textContent += " Elefantit voivat painaa yli kuusi tonnia.";
});

// Sivun taustaväri vaihto
const bgButton = document.createElement("button");
bgButton.textContent = "Vaihda taustaväri";
bgButton.addEventListener("click", function () {
    document.body.classList.toggle("bg-changed");
});

task1Buttons.append(addSentenceButton, bgButton);

// -------------------------------------------------- BONUS 2: TEHTÄVÄ 4
function addDeleteButton(tr) {
    const td = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista";

    deleteButton.addEventListener("click", function () {
        tr.remove();
    });

    td.append(deleteButton);
    tr.append(td);
}

// Otsikkoriville uusi sarake
const extraTh = document.createElement("th");
extraTh.textContent = "Poista";
document.querySelector("#observationTable thead tr").append(extraTh);

// Painikkeet jo olemassa oleville riveille
const existingRows = document.querySelectorAll("#observationTableBody tr");
existingRows.forEach(function (row) {
    addDeleteButton(row);
});

// -------------------------------------------------- BONUS 3:
const bonusButtons = document.createElement("div");
bonusButtons.classList.add("buttons");

const moveButton = document.createElement("button");
moveButton.textContent = "Siirrä kuvaa";
moveButton.addEventListener("click", function () {
    animalImage.classList.toggle("image-moved");
});

const animateButton = document.createElement("button");
animateButton.textContent = "Animoi kuva";
animateButton.addEventListener("click", function () {
    animalImage.classList.remove("image-animate");
    void animalImage.offsetWidth; 
    animalImage.classList.add("image-animate");
});

const fadeButton = document.createElement("button");
fadeButton.textContent = "Häivytä kuva";
fadeButton.addEventListener("click", function () {
    animalImage.classList.toggle("image-fade");
});

const removeImageButton = document.createElement("button");
removeImageButton.textContent = "Poista kuva";
removeImageButton.addEventListener("click", function () {
    animalImage.remove();
});

bonusButtons.append(moveButton, animateButton, fadeButton, removeImageButton);
animalImage.after(bonusButtons);

// -------------------------------------------------- BONUS 4:
const liButton = document.createElement("button");
liButton.textContent = "Korosta kaikki li-elementit";

liButton.addEventListener("click", function () {
    const allItems = document.querySelectorAll("li");

    allItems.forEach(function (item) {
        item.classList.toggle("li-highlight");
    });

    console.log("li-elementtejä yhteensä:", allItems.length);
});

bonusButtons.append(liButton);