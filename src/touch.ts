let isDrawing = false;

export const enableTouchDrawing = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getTouchPosition = (e: TouchEvent): { x: number; y: number } => {
        const canvasRect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const scaleX = canvas.width / canvasRect.width;
        const scaleY = canvas.height / canvasRect.height;
        return {
            x: (touch.clientX - canvasRect.left) * scaleX,
            y: (touch.clientY - canvasRect.top) * scaleY
        };
    };

    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        isDrawing = true;
        const { x, y } = getTouchPosition(e);
        ctx.beginPath();
        ctx.moveTo(x, y);
    }, { passive: false });

    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        if (!isDrawing) return;
        const { x, y } = getTouchPosition(e);
        ctx.lineTo(x, y);
        ctx.stroke();
    }, { passive: false });

    canvas.addEventListener("touchend", (e) => {
        isDrawing = false;
        ctx.closePath();
    });

    canvas.addEventListener("touchcancel", (e) => {
        isDrawing = false;
        ctx.closePath();
    });
};