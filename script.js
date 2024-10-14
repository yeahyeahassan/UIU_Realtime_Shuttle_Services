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
                { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "7:30 AM to 10:00 AM (continuous)" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "10:45 AM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "11:25 AM to Fixed" }, 
                { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "12:05 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "12:45 PM to 02:05 PM (continuous)" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "02:45 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "03:25 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "04:05 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "04:40 PM to 05:15 PM (continuous)" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "05:45 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "06:15 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "07:00 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "09:40 PM to Fixed" },
                { from: "Notunbazar", to: "UIU", days: "Mon-Fri", times: "9:00 AM to 11:00 AM" }
            ],
            masters: [
                { from: "UIU", to: "Notunbazar", days: "Sat-Sun", times: "12:00 PM, 2:00 PM" },
                { from: "Notunbazar", to: "UIU", days: "Sat-Sun", times: "1:00 PM, 3:00 PM" }
            ]
        },
        semester: {
            undergraduate: [
              { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "7:30 AM to 10:00 AM (continuous)" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "10:45 AM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "11:25 AM to Fixed" }, 
                { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "12:05 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "12:45 PM to 02:05 PM (continuous)" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "02:45 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "03:25 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "04:05 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "04:40 PM to 05:15 PM (continuous)" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "05:45 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "06:15 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "07:00 PM to Fixed" },
                 { from: "UIU", to: "Notunbazar", days: "Mon-Fri", times: "09:40 PM to Fixed" },
                { from: "Notunbazar", to: "UIU", days: "Mon-Fri", times: "9:00 AM to 11:00 AM" }
            ],
            masters: [
                { from: "UIU", to: "Notunbazar", days: "Sat-Sun", times: "1:00 PM, 3:00 PM" },
                { from: "Notunbazar", to: "UIU", days: "Sat-Sun", times: "2:00 PM, 4:00 PM" }
            ]
        }
    };

    // Get the appropriate data based on term and student type
    const selectedSchedule = shuttleTimes[termType][studentType];

    // Populate the table with the selected schedule
    selectedSchedule.forEach(schedule => {
        const row = table.insertRow();
        row.insertCell(0).innerText = schedule.from;
        row.insertCell(1).innerText = schedule.to;
        row.insertCell(2).innerText = schedule.days;
        row.insertCell(3).innerText = schedule.times;
    });
}

function initMap() {
    // Initialize map centered on UIU location (example coordinates)
    const uiuLocation = { lat: 23.7808875, lng: 90.4226361 };  // UIU coordinates

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uiuLocation
    });

    // Add a marker for the shuttle location (you can dynamically update this with real-time data)
    const shuttleMarker = new google.maps.Marker({
        position: uiuLocation,
        map: map,
        title: "UIU Shuttle"
    });

    // In a real-world scenario, you would update the shuttleMarker position dynamically
}

// Initialize the map
initMap();
