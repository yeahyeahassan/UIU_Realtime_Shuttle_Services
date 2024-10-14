function showTimetable() {
    const termType = document.getElementById('term-type').value;
    const studentType = document.getElementById('student-type').value;

    // Clear existing timetable rows
    const table = document.getElementById('schedule-table');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Example data for shuttle times (You can edit these in the code)
    const shuttleTimes = {
        trimester: {
            undergraduate: [
               { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "7:30 AM to 10:00 AM (continuous)" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "10:45 AM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "11:25 AM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "12:05 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "12:45 PM to 02:05 PM (continuous)" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "02:45 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "03:25 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "04:05 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "04:40 PM to 05:15 PM (continuous)" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "05:45 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "06:15 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "07:00 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "09:40 PM to Fixed" },
                { from: "Notunbazar", to: "UIU", days: "Sat-Wed", times: "9:00 AM to 11:00 AM" }
                // Additional times here...
            ],
            masters: [
               { from: "UIU", to: "Notunbazar", days: "Friday", times: "7:30 AM to 09:00 AM (continuous)" },
                { from: "UIU", to: "Notunbazar", days: "Friday", times: "02:00 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Friday", times: "06:00 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Friday", times: "09:40 PM to Fixed" }
                // Additional times here...
            ]
        },
        semester: {
            undergraduate: [
               { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "7:30 AM to 10:00 AM (continuous)" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "10:45 AM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "11:25 AM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "12:05 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "12:45 PM to 02:05 PM (continuous)" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "02:45 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "03:25 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "04:05 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "04:40 PM to 05:15 PM (continuous)" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "05:45 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "06:15 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "07:00 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Sat-Wed", times: "09:40 PM to Fixed" },
                { from: "Notunbazar", to: "UIU", days: "Sat-Wed", times: "9:00 AM to 11:00 AM" }
                // Additional times here...
            ],
            masters: [
                 { from: "UIU", to: "Notunbazar", days: "Friday", times: "7:30 AM to 09:00 AM (continuous)" },
                { from: "UIU", to: "Notunbazar", days: "Friday", times: "02:00 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Friday", times: "06:00 PM to Fixed" },
                { from: "UIU", to: "Notunbazar", days: "Friday", times: "09:40 PM to Fixed" }
                // Additional times here...
            ]
        }
    };

    // Get the appropriate data based on term and student type
    const selectedSchedule = shuttleTimes[termType][studentType];

    // Populate the table with the selected schedule
    selectedSchedule.forEach(route => {
        const row = table.insertRow();
        row.insertCell(0).innerText = route.from;
        row.insertCell(1).innerText = route.to;
        row.insertCell(2).innerText = route.days;
        row.insertCell(3).innerText = route.times;
    });
}

// Initialize the map for live tracking
const map = L.map('map').setView([23.7808875, 90.4229488], 13);  // Centered on Dhaka, adjust lat/lng as needed

// Add OSM tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Initialize a marker for the shuttle (starting position)
let shuttleMarker = L.marker([23.7808875, 90.4229488]).addTo(map).bindPopup('UIU Shuttle is here.');

// Simulate shuttle movement (you'll replace this with real data in a production system)
function updateShuttlePosition(lat, lng) {
    shuttleMarker.setLatLng([lat, lng])
        .bindPopup(`UIU Shuttle is here: (${lat.toFixed(5)}, ${lng.toFixed(5)})`).openPopup();
}

// Simulate shuttle moving every 3 seconds (this is for demo purposes, replace with actual data in production)
let currentLat = 23.7808875;
let currentLng = 90.4229488;
setInterval(() => {
    currentLat += (Math.random() - 0.5) * 0.001;  // Random small movement for simulation
    currentLng += (Math.random() - 0.5) * 0.001;
    updateShuttlePosition(currentLat, currentLng);
}, 3000);

// Update map image when location is selected
function updateMapImage() {
    const location = document.getElementById('location').value;
    const mapImage = document.getElementById('map-image');

    // Define image sources for each location (using .png format)
    const locationImages = {
        notunbazar: 'images/notunbazar-map.png',  // Replace with actual image paths
        uiu: 'images/uiu-map.png',
        kuril: 'images/kuril-map.png'
    };

    // Check if the location is valid and the image exists
    if (location && locationImages[location]) {
        mapImage.src = locationImages[location];  // Set the new image source
        mapImage.style.display = 'block';  // Show the image
    } else {
        mapImage.style.display = 'none';  // Hide the image if no location is selected
    }
}
