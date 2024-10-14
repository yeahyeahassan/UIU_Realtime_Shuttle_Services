// Initialize the OpenStreetMap (OSM) map using Leaflet.js
function initMap() {
    var map = L.map('map').setView([23.7808875, 90.2792371], 13); // UIU coordinates (Dhaka)

    // Add OSM tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to represent the shuttle's location
    var shuttleMarker = L.marker([23.7808875, 90.2792371]).addTo(map);
    shuttleMarker.bindPopup("<b>UIU Shuttle</b><br>Real-time shuttle location").openPopup();

    // Simulate real-time location update (You can replace this with real GPS data)
    setInterval(function() {
        var newLat = 23.7810; // Updated latitude
        var newLon = 90.2795; // Updated longitude
        shuttleMarker.setLatLng([newLat, newLon]); // Update marker location
    }, 5000); // Update every 5 seconds
}

// Call map initialization
initMap();
