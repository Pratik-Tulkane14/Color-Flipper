const hex = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 1; i <= 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});
// Function to Generate Randon No
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}