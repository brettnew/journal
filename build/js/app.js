(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('form#entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();
    var simpleEntry = new Entry;
    var wordNumber = simpleEntry.wordCount(content);
    var vowelNumber = simpleEntry.letterCount(content)[0];
    var consonantNumber = simpleEntry.letterCount(content)[1];
    var teaser = simpleEntry.getTeaser(content);
    $('#word_count').append(wordNumber);
    $('#vowel_count').append(vowelNumber);
    $('#consonant_count').append(consonantNumber);
    $('#teaser').append(teaser);
  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
function Entry(){};

Entry.prototype.wordCount = function(entry) {
  return entry.split(" ").length;
}

Entry.prototype.letterCount = function(entry) {
  letters = entry.split("");
  var counter_vowels = 0;
  var counter_consonants = 0;
  for (i = 0; i < letters.length; i++)
  if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
   counter_vowels ++;
 } else if (letters[i] === " ") {
   counter_vowels += 0;
   counter_consonants += 0;
  }  else {
   counter_consonants ++;
  }
  // debugger;
  return [counter_vowels, counter_consonants];
};

Entry.prototype.getTeaser = function(entry) {
  var index = entry.indexOf(".");
  var teaser = entry.slice(0, index+1);
  if (teaser.split(" ").length < 8) {
    return teaser;
  } else {
    return teaser.split(" ").slice(0,8).join(" ")
  }
}

exports.entryModule = Entry;

},{}]},{},[1]);
