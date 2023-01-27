"use strict";
exports.__esModule = true;
var express = require('express');
var WebSocket = require('ws');
var msgpack = require('msgpack-lite');
var cycle = require('cycle');
var wss = new WebSocket.Server({ port: 3000 });
var http = require("http");
var fs = require("fs");
var chord_1 = require("./chord");
console.log(chord_1["default"]);
// console.log(ChordType);
var pattern_1 = require("./pattern");
console.log(pattern_1["default"]);
var ejs = require('ejs');
var app = express();
var cChord = chord_1["default"].getChord(60, "major" /* ChordType.Major */);
console.log(cChord);
var pat = pattern_1["default"].getSimplePattern();
console.log(pat);
var piece = pattern_1["default"].getPiece(pat, cChord, 2);
console.log(piece);
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //since we are in a request handler function
    //we're using readFile instead of readFileSync
    fs.readFile('./clefs.html', 'utf-8', function (err, content) {
        if (err) {
            res.end('error occurred');
            return;
        }
        var renderedHtml = ejs.render(content); //get redered HTML code
        res.end(renderedHtml);
    });
}).listen(8080);
var encodedPiece = JSON.stringify(piece);
wss.on('connection', function (ws) {
    ws.send(encodedPiece);
});
