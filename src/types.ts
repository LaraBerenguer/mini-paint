export type PaintColor = "red" | "green" | "yellow" | "black";

export type BrushSize = "small" | "medium" | "big";
export type BrushPadding = "5px" | "7px" | "9px";

export type BrushType = {
    size: number;
    padding: BrushPadding;
};

export type Brushes = {
    [key in BrushSize]: BrushType;
};