// Array to store shuttle times
let shuttleTimes = [];

// Function to add shuttle time to the table
function addShuttleTime(from, to, day, time, category) {
    // Create a new row
    const tableBody = document.getElementById('shuttleTableBody');
    const newRow = document.createElement('tr');

    // Add cells to the row
    newRow.innerHTML = `
        <td>${from}</td>
        <td>${to}</td>
        <td>${day}</td>
        <td>${time}</td>
        <td>${category}</td>
    `;

    // Append the row to the table
    tableBody.appendChild(newRow);

    // Save the shuttle times in the array
    shuttleTimes.push({ from, to, day, time, category });
}

// Form submission event
document.getElementById('shuttleForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const category = document.getElementById('category').value;

    // Add shuttle time to the table
    addShuttleTime(from, to, day, time, category);

    // Clear form fields
    document.getElementById('shuttleForm').reset();
});
