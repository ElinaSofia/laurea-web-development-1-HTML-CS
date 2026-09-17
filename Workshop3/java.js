// Exercise 1

function showTable() {
    const animal = "Lion";
    const habitat = "Savanna";
    const diet = "Carnivore";

    const html = `
        <table>
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    document.querySelector("#tableContainer").innerHTML = html;
}

// Exercise 2


const ex2Heading = document.querySelectorAll("h2")[1]; 
ex2Heading.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});


const ex1Heading = document.querySelectorAll("h2")[0]; 
ex1Heading.addEventListener("click", function() {
    ex1Heading.style.color = "red";
    ex1Heading.innerHTML = "Bye bye mouse!";
});

// Exercise 3

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");


feedback.addEventListener("focus", function() {
    status.textContent = "Writing feedback...";
    feedback.style.backgroundColor = "#fff8dc";
});


feedback.addEventListener("blur", function() {
    status.textContent = "";
    feedback.style.backgroundColor = "";
});


feedback.addEventListener("input", function() {
    const length = feedback.value.length;
    charcount.textContent = `${length}/200`;
    preview.textContent = feedback.value;
});

// Exercise 4

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const length = feedback.value.length;

    if (length < 10 || length > 200) {
        status.textContent = "Feedback must be between 10 and 200 characters.";
        status.style.color = "red";
    } else {
        status.textContent = "Thank you for your feedback!";
        status.style.color = "green";
        feedback.value = "";
        charcount.textContent = "0/200";
        preview.textContent = "";
    }
});

// Exercise 5

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function(event) {
    console.log(event);

    keyinfo.textContent = `Key: ${event.key} | Code: ${event.code}`;
    keybox.innerHTML = `<span style="font-size: 3em;">${event.key}</span>`;
});

// Bonus

let keyCount = 0;

document.addEventListener("keydown", function(event) {
    keyCount++;

    
    const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    keybox.style.backgroundColor = randomColor;

    const modifiers = [];
    if (event.shiftKey) modifiers.push("Shift");
    if (event.ctrlKey) modifiers.push("Ctrl");
    if (event.altKey) modifiers.push("Alt");

    keyinfo.textContent += ` | Presses: ${keyCount} | Modifiers: ${modifiers.join(", ") || "none"}`;
});

// Bonus 2

function findLocation() {
    const result = document.querySelector("#locationResult");
    result.textContent = "Locating...";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log("Latitude:", lat);
            console.log("Longitude:", lon);

            const url = `https://www.google.com/maps?q=${lat},${lon}`;
            result.innerHTML = `Found you! <a href="${url}" target="_blank">Open in Google Maps</a>`;
        },
        (error) => {
            result.textContent = "Could not get the location: " + error.message;
        }
    );
}