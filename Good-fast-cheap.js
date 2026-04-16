let good = document.getElementById("good");
let cheap = document.getElementById("cheap");
let fast = document.getElementById("fast");

function checkToggles(tenNutVuaBam) {
    if (good.checked && cheap.checked && fast.checked) {

        if (tenNutVuaBam === 'good') {
            fast.checked = false;
        }
        else if (tenNutVuaBam === 'cheap') {
            good.checked = false;
        }
        else if (tenNutVuaBam === 'fast') {
            cheap.checked = false;
        }
    }
}