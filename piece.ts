type Note = {
    noteIndex: number;
    length: string;
};

type Piece = {
    rightHandNotes: Note[][];
    leftHandNotes: Note[][];
    quarters: number;
};