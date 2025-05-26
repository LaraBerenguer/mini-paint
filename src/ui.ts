import { allColors, changeColors } from "./colors.js";
import { PaintColor } from "./types.js";

export const showColorButtons = () => {
    const container = document.querySelector(".colorsSelector");
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
