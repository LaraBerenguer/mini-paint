import { drawLine, clearCanvas } from "./canvas.js";

document.getElementById("drawBtn")?.addEventListener("click", () => {
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
});

document.getElementById("cleanBtn")?.addEventListener("click", () => {
    clearCanvas();
});