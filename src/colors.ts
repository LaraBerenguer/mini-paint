import { PaintColor } from "./types.js";

export const allColors = {
    red: "rgb(242, 132, 130)",
    green: "rgb(132, 165, 157)",
    yellow: "rgb(246, 189, 96)",
    black: "black",
};

export const changeColors = (colorValue: PaintColor) => {
    const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!canvas || !ctx) return;

    const color = allColors[colorValue];
    if (color) {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = color;
    };
};