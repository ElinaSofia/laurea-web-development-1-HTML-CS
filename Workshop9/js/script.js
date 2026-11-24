let forecast = [];
let chart;

async function getForecast(city, apiKey) {
 // 1. Geocoding API: muutetaan kaupungin nimi koordinaateiksi
  const locations = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
    params: { q: city, limit: 1, appid: apiKey }
  });

  // Jos kaupunkia ei löydy, tulostetaan tyhjä taulukko
  const place = locations.data[0];
  if (!place) return [];

  // 2. Forecast API: haetaan ennuste koordinaateilla
  const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
    params: { lat: place.lat, lon: place.lon, units: "metric", appid: apiKey }
  });
  return response.data.list;
}

function paivitaKaavio() {
  if (forecast.length === 0) return;
  // Vanha kaavio pitää poistaa ennen uuden piirtämistä samaan canvasiin
  if (chart) chart.destroy();
  const labels = forecast.map(entry => entry.dt_txt.slice(0, 16));
  const temperatures = forecast.map(entry => entry.main.temp);
    chart = new Chart(document.getElementById("tempChart"), {
    type: document.getElementById("chartType").value,
    data: {
      labels,
      datasets: [{
        label: "Lämpötila °C",
        data: temperatures,
        borderWidth: 2,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3
      }]
    }
  });
}
// Suoritetaan, kun käyttäjä painaa "Hae sää"
async function haeSaa() {
  const city = document.querySelector("#kaupunki").value.trim();
  const apiKey = document.querySelector("#apiKey").value.trim();
  const viesti = document.querySelector("#viesti");
  viesti.textContent = "";

 // Tarkistetaan, ettei kumpikaan kenttä ole tyhjä
  if (!city) {
    viesti.textContent = "Kirjoita kaupungin nimi.";
    return;
  }
  if (!apiKey) {
    viesti.textContent = "Syötä API-avain.";
    return;
  }

// jQuery-bonus: näytetään latausviesti haun ajaksi
  $("#saaYllatys").show(); 

  try {
    forecast = await getForecast(city, apiKey);

    if (forecast.length === 0) {
      viesti.textContent = "Kaupunkia ei löytynyt";
      return;
    }

    document.querySelector("#kaupunginNimi").textContent = city;
    paivitaKaavio();

    // Oma lisäys: muista viimeksi haettu kaupunki
    localStorage.setItem("viimeisinKaupunki", city);
  } catch (error) {
    viesti.textContent = "Haku epäonnistui: " + error.message;
  } finally {
    // Piilotetaan latausviesti aina, onnistui haku tai ei
    $("#saaYllatys").hide();
  }
}

document.querySelector("#haeSaaPainike").addEventListener("click", haeSaa);

// Oma lisäys: täytä kenttä viimeksi haetulla kaupungilla sivun latautuessa
const viimeisin = localStorage.getItem("viimeisinKaupunki");
if (viimeisin) {
  document.querySelector("#kaupunki").value = viimeisin;
}