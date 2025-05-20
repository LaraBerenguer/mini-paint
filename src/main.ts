import { drawLine, clearCanvas } from "./canvas.js";
import { mouseDrawing } from "./mouse.js";

const initApp = () => {
    const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    if (!canvas) { console.log("Canvas not found"); return; };

    setClearButton();
    setDrawButton();
    setClearButton();
};

const setDrawButton = () => {
    const drawBtn = document.getElementById("drawBtn");
    if (!drawBtn) { return };

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
};

const setClearButton = () => {
    const clearBtn = document.getElementById("cleanBtn");
    if (!clearBtn) { return };

    clearBtn.addEventListener("click", clearCanvas);
};

initApp();