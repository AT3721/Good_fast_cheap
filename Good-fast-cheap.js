let toggles = document.querySelectorAll(".toggle-checkbox");
let good = document.querySelector("#good");
let cheap = document.querySelector("#cheap");
let fast = document.querySelector("#fast");

toggles.forEach(toggles => {
    toggles.addEventListener("change", (event) => {
        checkToggles(event.target);
    });
});

function checkToggles(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) {
            fast.checked = false;
        }
        if (cheap === theClickedOne) {
            good.checked = false;
        }
        if (fast === theClickedOne) {
            cheap.checked = false;
        }
    }
}