/* Vienna Sightseeing Beispiel */

// Stephansdom Objekt
let stephansdom = {
    lat: 48.208493,
    lng: 16.373118,
    zoom: 12,
    title: "Domkirche St. Stephan",
};

// Karte initialisieren
let map = L.map("map").setView([stephansdom.lat, stephansdom.lng], stephansdom.zoom);

// Hintergrundkarte definieren

// Kontrollzentrum für die Layer 
L.control.layers({
    "BasemapAT grau": L.tileLayer('https://mapsneu.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png', {
        maxZoom: 19,
        attribution: 'Hintergrundkarte: <a href="https://www.basemap.at">basemap.at</a>'
    }).addTo(map)
}, {

}).addTo(map);

// Maßstab
L.control.scale({
    imperial: false,
}).addTo(map);

// Sehenswürdigkeiten, Linien, Bushaltestopps und Fußgängerzonen am Standort Wien
async function loadSights (url) {
    console.log(url);
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log(jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href= 'https://data.wien.gv.at'>Stadt Wien</a>"
    }).addTo(map);
}

async function loadLines (url) {
    console.log(url);
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log(jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href= 'https://data.wien.gv.at'>Stadt Wien</a>"
    }).addTo(map);
}

async function loadStops (url) {
    console.log(url);
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log(jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href= 'https://data.wien.gv.at'>Stadt Wien</a>"
    }).addTo(map);
}

async function loadZones (url) {
    console.log(url);
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log(jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href= 'https://data.wien.gv.at'>Stadt Wien</a>"
    }).addTo(map);
}

// GeoJSON laden und visualisieren
loadSights("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SEHENSWUERDIGOGD&srsName=EPSG:4326&outputFormat=json");
loadLines("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TOURISTIKLINIEVSLOGD&srsName=EPSG:4326&outputFormat=json");
loadStops("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TOURISTIKHTSVSLOGD&srsName=EPSG:4326&outputFormat=json");
loadZones("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:FUSSGEHERZONEOGD&srsName=EPSG:4326&outputFormat=json");