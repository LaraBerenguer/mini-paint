let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;

const getCanvasContext = (): CanvasRenderingContext2D | null => {
    if (!canvas) canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    if (!ctx && canvas) ctx = canvas.getContext("2d");
    return ctx;
};

export const clearCanvas = () => {
    const ctx = getCanvasContext();
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height)
};

export const ereaseStroke = () => {
    const ctx = getCanvasContext();
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = 10;
};