"use strict";
exports.__esModule = true;
exports.Notes = void 0;
var Notes;
(function (Notes) {
    Notes[Notes["C"] = 0] = "C";
    Notes[Notes["CSharp"] = 1] = "CSharp";
    Notes[Notes["D"] = 2] = "D";
    Notes[Notes["DSharp"] = 3] = "DSharp";
    Notes[Notes["E"] = 4] = "E";
    Notes[Notes["F"] = 5] = "F";
    Notes[Notes["FSharp"] = 6] = "FSharp";
    Notes[Notes["G"] = 7] = "G";
    Notes[Notes["GSharp"] = 8] = "GSharp";
    Notes[Notes["A"] = 9] = "A";
    Notes[Notes["ASharp"] = 10] = "ASharp";
    Notes[Notes["B"] = 11] = "B";
})(Notes = exports.Notes || (exports.Notes = {}));
function midiToNote(midi) {
    var octave = Math.floor(midi / 12) - 1;
    var note = Notes[midi % 12];
    return "".concat(note).concat(octave);
}
exports["default"] = {
    midiToNote: midiToNote
};
