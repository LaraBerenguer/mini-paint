let isDrawing = false;

export const mouseDrawing = (canvas: HTMLCanvasElement) => {    

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener("mousemove", (e) => {
        isDrawing = true;        
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    });

    canvas.addEventListener("mouseup", (e) => {
        isDrawing = false;        
    });

    canvas.addEventListener("mouseleave", (e) => {
        isDrawing = false;        
    });  
};