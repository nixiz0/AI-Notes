document.addEventListener('DOMContentLoaded', function() {
    const square = document.getElementById('square');
    const popup = document.getElementById('popup');
    const startLink = document.getElementById('start-link');

    square.addEventListener('click', function() {
        const rect = startLink.getBoundingClientRect();
        // Calculate the position of the popup higher relative to the startLink element
        const top = rect.top - popup.clientHeight - 400; // Adjust the negative value as needed
        const left = rect.left;

        popup.style.top = top + 'px';
        popup.style.left = left + '0px';

        if (popup.style.display === 'none' || popup.style.display === '') {
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    });
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months start at 0, so add 1
    const year = now.getFullYear();

    const dateString = `${day}/${month}/${year}`;

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();