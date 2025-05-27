import { drawLine, clearCanvas, ereaseStroke } from "./canvas.js";
import { enableMouseDrawing } from "./mouse.js";
import { showColorButtons, showBrushSizes } from "./ui.js";

const initApp = () => {
    const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    if (!canvas) { console.log("Canvas not found"); return; };

    setClearButton();
    setBrushSizes();
    setEreaseStroke();
    setDrawButton();
    setColorButtons();
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

const setEreaseStroke = () => {
    const ereaseBtn = document.getElementById("ereaseBtn");
    if (!ereaseBtn) { return };

    ereaseBtn.addEventListener("click", ereaseStroke);
};

const setColorButtons = () => {
    showColorButtons();
};

const setBrushSizes = () => {
    showBrushSizes();
};

initApp();