import { drawLine, clearCanvas } from "./canvas.js";
import { enableMouseDrawing } from "./mouse.js";
import { changeColors } from "./colors.js";

const initApp = () => {
    const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    if (!canvas) { console.log("Canvas not found"); return; };

    setClearButton();
    setDrawButton();
    setChangeColor();
    enableMouseDrawing(canvas);
};

const setDrawButton = () => {
    const drawBtn = document.getElementById("drawBtn");
    if (!drawBtn) { return };

    drawBtn.addEventListener("click", () => {
        const xStart = document.getElementById("xs") as HTMLInputElement;
        const yStart = document.getElementById("ys") as HTMLInputElement;
        const xEnd = document.getElementById("xe") as HTMLInputElement;
        const yEnd = document.getElementById("ye") as HTMLInputElement;

        drawLine({
            xStart: Number(xStart.value),
            yStart: Number(yStart.value),
            xEnd: Number(xEnd.value),
            yEnd: Number(yEnd.value),
        });
    })
};

const setClearButton = () => {
    const clearBtn = document.getElementById("cleanBtn");
    if (!clearBtn) { return };

    clearBtn.addEventListener("click", clearCanvas);
};

const setChangeColor = () => {
    const selectedColor = document.getElementById("colors") as HTMLSelectElement;
    if (!selectedColor) { return };

    selectedColor.addEventListener("click", () => {changeColors(selectedColor.value)});
};

initApp();