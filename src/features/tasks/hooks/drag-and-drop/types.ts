export type DragStartHandler = (index: number) => void;
export type DragEnterHandler = (index: number) => void;
export type DragOverHandler = (e: React.DragEvent<HTMLLIElement>) => void;
export type DragEndHandler = () => void;
