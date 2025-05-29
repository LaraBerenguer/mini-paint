import { allColors, changeColors } from "./colors.js";
import { allBrushes, changeBrushSize } from "./brushes.js";
import { PaintColor, BrushSize } from "./types.js";

export const showColorButtons = () => {
    const container = document.querySelector(".colors-selector");
    if (!container) return;
    container.innerHTML = "";

    const colorOptions = document.createElement("div");
    colorOptions.className = "color-options";

    for (const colorName in allColors) {
        const name = colorName as PaintColor;
        const value = allColors[name];

        const btn = document.createElement("button");
        btn.className = `color-swatch color-${name}`;
        btn.title = name;
        btn.style.backgroundColor = value;
        btn.addEventListener("click", () => {            
            document.querySelectorAll(".color-swatch").forEach(btn => btn.classList.remove("active"));
            btn.classList.add("active");
            changeColors(name);
        });

        colorOptions.appendChild(btn);
    };

    container.appendChild(colorOptions);
};

export const showBrushSizes = () => {
    const container = document.querySelector(".brush-selector");
    if (!container) return;
    container.innerHTML = "";

    const brushOptions = document.createElement("div");
    brushOptions.className = "brush-options";

    for (const brushName in allBrushes) {
        const name = brushName as BrushSize;
        const brushes = allBrushes[name];

        const btn = document.createElement("button");
        btn.className = `brush-size size-${name}`;
        btn.title = name;   
        btn.style.padding = brushes.padding;     
        btn.addEventListener("click", () => {            
            document.querySelectorAll(".brush-size").forEach(btn => btn.classList.remove("active"));
            btn.classList.add("active");
            changeBrushSize(name);
        });

        brushOptions.appendChild(btn);
    };

    container.appendChild(brushOptions);
};