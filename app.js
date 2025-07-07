// count from 0 to 24

let count = 0;
const counter = document.getElementById("counter");

function updateCount() {
    if (count <= 24) {
        counter.textContent = count;
        count++;
        setTimeout(updateCount, 90); // 90ms delay for fast counting
    }
}

// Start counting on page load
updateCount();





const menuButton = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

const openBtn = document.getElementById('toggleBtnOpen');
const closeBtn = document.getElementById('toggleBtnClose');

//mobile menu toggle
menuButton.addEventListener("click", (event) => {
    event.stopPropagation(); // prevent click from bubbling to document
    dropdownMenu.classList.toggle("hidden");

    closeBtn.classList.toggle('hidden');
    openBtn.classList.toggle('hidden');
});

document.addEventListener("click", (event) => {
    // Close the dropdown if the click is outside the menu and the button
    if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
    }
});






