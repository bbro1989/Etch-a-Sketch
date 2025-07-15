const gridContainer = document.querySelector(".gridContainer");
const resetBtn = document.getElementById("resetBtn");
const gridInfo = document.getElementById("gridInfo");

function createGrid(size) {
    gridContainer.innerHTML = ""; // Clear old grid
    const squareSize = 960 / size;
    gridInfo.textContent = `Grid: ${size} x ${size} | Square size: ${squareSize.toFixed(2)}px`
    for (let i = 0; i < size * size; i++) {
        let newElem = document.createElement("div");
        newElem.classList.add("grid-item");
        newElem.style.width = `${squareSize}px`;
        newElem.style.height = `${squareSize}px`;
        gridContainer.appendChild(newElem);
    }
}

resetBtn.addEventListener("click", () => {
    let size = prompt("Enter grid size (max 100):", 16);
    size = Math.min(Math.max(parseInt(size), 1), 100) || 16;
    createGrid(size);
});

createGrid(16); 