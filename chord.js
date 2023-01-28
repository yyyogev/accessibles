"use strict";
exports.__esModule = true;
exports.Inversion = void 0;
var reactPiano = require('react-piano');
var MidiNumbers = reactPiano.MidiNumbers;
var notes_1 = require("./notes");
var Inversion;
(function (Inversion) {
    Inversion[Inversion["Natural"] = 0] = "Natural";
    Inversion[Inversion["First"] = 1] = "First";
    Inversion[Inversion["Second"] = 2] = "Second";
})(Inversion = exports.Inversion || (exports.Inversion = {}));
function getChord(root, chordType, inversion) {
    if (inversion === void 0) { inversion = 0; }
    var chord;
    switch (chordType) {
        case "major" /* ChordType.Major */:
            chord = [root, root + 4, root + 7];
            break;
        case "minor" /* ChordType.Minor */:
            chord = [root, root + 3, root + 7];
            break;
        case "dim" /* ChordType.Diminished */:
            chord = [root, root + 3, root + 6];
            break;
        case "aug" /* ChordType.Augmented */:
            chord = [root, root + 4, root + 8];
            break;
        case "7" /* ChordType.DominantSeventh */:
            chord = [root, root + 4, root + 7, root + 10];
            break;
        case "maj7" /* ChordType.MajorSeventh */:
            chord = [root, root + 4, root + 7, root + 11];
            break;
        case "min7" /* ChordType.MinorSeventh */:
            chord = [root, root + 3, root + 7, root + 10];
            break;
        case "dim7" /* ChordType.DiminishedSeventh */:
            chord = [root, root + 3, root + 6, root + 9];
            break;
        case "m7b5" /* ChordType.HalfDiminishedSeventh */:
            chord = [root, root + 3, root + 6, root + 10];
            break;
        case "aug7" /* ChordType.AugmentedSeventh */:
            chord = [root, root + 4, root + 8, root + 10];
            break;
        default:
            throw new Error("Invalid chord type: ".concat(chordType));
    }
    if (inversion > 0 && inversion <= chord.length) {
        root += (inversion - 1) * 12;
        var inversionRoot = chord[inversion - 1];
        for (var i = 0; i < inversion; i++) {
            chord[i] = chord[i] - inversionRoot + root;
        }
    }
    var inversionStr = '';
    switch (inversion) {
        case 1:
            inversionStr = '1st';
            break;
        case 2:
            inversionStr = '2nd';
            break;
        default:
            inversionStr = '';
    }
    return {
        name: "".concat(notes_1.midiToNote(root)).concat(chordType.toString()).concat(inversionStr),
        root: root,
        octave: 1,
        inversion: inversion,
        notes: chord
    };
}
function getCommonChordProgression(firstChord, otherChords, progression) {
    // Create an array to store the chord progression
    var result = [firstChord];
    // Add the specified chords to the progression
    for (var _i = 0, progression_1 = progression; _i < progression_1.length; _i++) {
        var chordIndex = progression_1[_i];
        // Find the chord with the root note MIDI tone equal to the chord index of the scale
        var chord = void 0;
        for (var _a = 0, otherChords_1 = otherChords; _a < otherChords_1.length; _a++) {
            var c = otherChords_1[_a];
            if (c.root === (firstChord.root + chordIndex) % 12) {
                chord = c;
                break;
            }
        }
        // If the chord was not found, return an empty array
        if (!chord) {
            return [];
        }
        // Add the chord to the progression
        result.push(chord);
    }
    return result;
}
exports["default"] = {
    getChord: getChord,
    getCommonChordProgression: getCommonChordProgression
};
