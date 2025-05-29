let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;

const getCanvasContext = (): CanvasRenderingContext2D | null => {
    if (!canvas) canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    if (!ctx && canvas) ctx = canvas.getContext("2d");
    return ctx;
};

export const initCanvas = () => {
    const ctx = getCanvasContext();
    if (!ctx || !canvas) return;

    setWhiteBackground();

    return {
        width: canvas.width,
        height: canvas.height
    };
};

export const clearCanvas = () => {
    const ctx = getCanvasContext();
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setWhiteBackground();
};

export const ereaseStroke = () => {
    const ctx = getCanvasContext();
    if (!ctx) return;

    /*ctx.globalCompositeOperation = "destination-out";
    ctx.strokeStyle = "rgba(0,0,0,1)";*/
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
};

const setWhiteBackground = () => {
    const ctx = getCanvasContext();
    if (!ctx || !canvas) return;

    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
};

export const downloadImage = () => {
    const ctx = getCanvasContext();
    if (!ctx || !canvas) return;
    
    const dataUrl = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "mini-drawing.jpg";
    link.click();
};