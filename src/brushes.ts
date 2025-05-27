import { BrushSize } from "./types";

export const allBrushes = {
    small: 1,
    medium: 10,
    big: 20,
};

export const changeBrushSize = (brushSize: BrushSize) => {
    const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!canvas || !ctx) return;

    const size = allBrushes[brushSize];
    if (size) {
        ctx.lineWidth = size;
    };
};