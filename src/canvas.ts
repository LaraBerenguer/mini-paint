import { DrawLine } from "./types.js";

const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

export const drawLine = ({ xStart, yStart, xEnd, yEnd }: DrawLine) => {
    if (!canvas) return;
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
};

export const clearCanvas = () => {
    if (!canvas) return;
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height)
};