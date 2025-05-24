const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

export const changeColors = (colorValue: string) => {
    if (!canvas) return;
    if (!ctx) return;

    switch (colorValue) {
        case "red":
            if (colorValue === "red") {
                ctx.strokeStyle = "red";
            };
            break;
        case "green":
            if (colorValue === "green") {
                ctx.strokeStyle = "green";
            };
            break;
        case "yellow":
            if (colorValue === "yellow") {
                ctx.strokeStyle = "yellow";
            };
            break;
        case "black":
            if (colorValue === "black") {
                ctx.strokeStyle = "black";
            };
            break;
        default:
            return;
    };
};