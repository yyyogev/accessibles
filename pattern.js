"use strict";
exports.__esModule = true;
var notes_1 = require("./notes");
var vexFlow = require('vexflow');
function getPiece(chordPattern, chord, bars) {
    var notes = [
        new vexFlow.StaveNote({ keys: ["c/4", "f/4", "a/4", "c/5"], duration: "h" }),
        new vexFlow.StaveNote({ keys: ["c#/4", "f#/4", "a/4", "d#/5"], duration: "h" })
    ];
    console.log(chord);
    // for (var i = 0; i < chord.notes.length; i++) {
    //     for (var j = 0; j < chordPattern.rightHandVoices.length; j++) {
    //         chordPattern.rightHandVoices[j] = chordPattern.rightHandVoices[j].replaceAll(i.toString(), notes_1["default"].midiToNote(chord.notes[i]).toString());
    //     }
    // }
    // for (var i = 0; i < chord.notes.length; i++) {
    //     for (var j = 0; j < chordPattern.leftHandVoices.length; j++) {
    //         chordPattern.leftHandVoices[j] = chordPattern.leftHandVoices[j].replaceAll(i.toString(), notes_1["default"].midiToNote(chord.notes[i] - 12).toString());
    //     }
    // }
    // console.log(chordPattern);
    return notes;
}
function getSimplePattern() {
    var rightHandNotes = "(0 1 2)/h, (0 1 2)/h";
    var leftHandNotes = "0/w";
    return {
        quarters: 4,
        leftHandVoices: [leftHandNotes],
        rightHandVoices: [rightHandNotes]
    };
}
exports["default"] = {
    getSimplePattern: getSimplePattern,
    getPiece: getPiece
};
