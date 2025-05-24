const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

export const changeColors = (colorValue: string) => {
    if (!canvas) return;
    if (!ctx) return;

    switch (colorValue) {
        case "red":
            if (colorValue === "red") {
                ctx.strokeStyle = "rgb(242, 132, 130)";
            };
            break;
        case "green":
            if (colorValue === "green") {
                ctx.strokeStyle = "rgb(132, 165, 157)";
            };
            break;
        case "yellow":
            if (colorValue === "yellow") {
                ctx.strokeStyle = "rgb(246, 189, 96)";
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