import { PaintColor } from "./types";

const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const allColors = {
    red: "rgb(242, 132, 130)",
    green: "rgb(132, 165, 157)",
    yellow: "rgb(246, 189, 96)",
    black: "black",
};

export const changeColors = (colorValue: PaintColor) => {
    if (!canvas) return;
    if (!ctx) return;

    const color = allColors[colorValue];
    if (color) {
        ctx.strokeStyle = color;
    };
};