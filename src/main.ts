import { clearCanvas, downloadImage, ereaseStroke, initCanvas } from "./canvas.js";
import { enableMouseDrawing } from "./mouse.js";
import { enableTouchDrawing } from "./touch.js";
import { showColorButtons, showBrushSizes } from "./ui.js";

const initApp = () => {
    const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    if (!canvas) { console.log("Canvas not found"); return; };

    setCanvasSize(canvas);

    setInitCanvas();
    setClearButton();
    setBrushSizes();
    setEreaseStroke();
    setColorButtons();
    enableMouseDrawing(canvas);
    enableTouchDrawing(canvas);
    setDownloadButton();
};

const setCanvasSize = (canvas: HTMLCanvasElement) => {
    const container = canvas.parentElement;
    if (!container) return;

    const containerWidth = container.clientWidth;
    canvas.width = containerWidth;
    canvas.height = containerWidth / 2;
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

const setInitCanvas = () => {
    initCanvas();
};

const setDownloadButton = () => {
    const downloadBtn = document.getElementById("downloadBtn");
    if (!downloadBtn) { return };

    downloadBtn.addEventListener("click", downloadImage);
};

initApp();