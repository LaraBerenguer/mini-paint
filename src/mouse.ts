let isDrawing = false;

export const enableMouseDrawing = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getMousePosition = (e: MouseEvent): { x: number; y: number } => {
        const canvasRect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / canvasRect.width;
        const scaleY = canvas.height / canvasRect.height;

        return {
            x: (e.clientX - canvasRect.left) * scaleX,
            y: (e.clientY - canvasRect.top) * scaleY
        };
    };

    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        const { x, y } = getMousePosition(e)
        ctx.beginPath();
        ctx.moveTo(x, y);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!isDrawing) return;
        const { x, y } = getMousePosition(e)
        ctx.lineTo(x, y);
        ctx.stroke();
    });

    canvas.addEventListener("mouseup", (e) => {
        isDrawing = false;
    });

    canvas.addEventListener("mouseleave", (e) => {
        isDrawing = false;
    });
};