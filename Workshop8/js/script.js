const apiKey = "YOUR_API_KEY";

const weatherdata = document.querySelector("#weatherdata");

// Hakee annetun kaupungin säätiedot XML-muodossa ja näyttää ne sivulla
async function haeSaa(city) {
  weatherdata.textContent = "Ladataan säätietoja...";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=xml&lang=fi&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP-virhe: ${response.status}`);
    }

    const xmlText = await response.text();
    console.log(xmlText); // raaka XML näkyy kehittäjätyökalujen konsolissa

    // Muutetaan XML-teksti dokumentiksi, jotta siitä voidaan lukea yksittäisiä tietoja
    const xml = new DOMParser().parseFromString(xmlText, "application/xml");

    // Tiedot ovat XML-elementtien attribuuteissa, esim. <temperature value="3.5">
    const nimi = xml.querySelector("city").getAttribute("name");
    const lampotila = xml.querySelector("temperature").getAttribute("value");
    const pilvisyys = xml.querySelector("clouds").getAttribute("value");
    const kosteus = xml.querySelector("humidity").getAttribute("value");
    const kuvaus = xml.querySelector("weather").getAttribute("value");

    weatherdata.innerHTML = `
      <h3>${nimi}</h3>
      <p>Lämpötila: ${lampotila} °C</p>
      <p>Pilvisyys: ${pilvisyys} %</p>
      <p>Ilmankosteus: ${kosteus} %</p>
      <p>Sää: ${kuvaus}</p>
    `;
  } catch (error) {
    weatherdata.textContent = "Säätietojen haku epäonnistui: " + error.message;
  }
}

// "Hae data" -painike hakee valikossa valittuna olevan kaupungin
document.querySelector("#fetchWeather").addEventListener("click", function () {
  haeSaa(document.querySelector("#city").value);
});

// Pudotusvalikko: haetaan uusi kaupunki heti, kun valinta muuttuu
document.querySelector("#city").addEventListener("change", function () {
  haeSaa(this.value);
});

// Hakukenttä: haetaan käyttäjän kirjoittama kaupunki
document.querySelector("#search").addEventListener("click", function () {
  const hakusana = document.querySelector("#citysearch").value.trim();

  if (!hakusana) {
    weatherdata.textContent = "Kirjoita kaupungin nimi.";
    return;
  }
  haeSaa(hakusana);
});