import { Brushes, BrushSize } from "./types";

export const allBrushes: Brushes = {
    small: {
        size: 1,
        padding: "5px"
    },
    medium: {
        size: 10,
        padding: "7px"
    },
    big: {
        size: 20,
        padding: "9px"
    }
};

export const changeBrushSize = (brushSize: BrushSize) => {
    const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!canvas || !ctx) return;

    const brush = allBrushes[brushSize];
    if (brush) {
        ctx.lineWidth = brush.size;
    };
};