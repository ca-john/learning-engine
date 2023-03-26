const mongoose = require('mongoose');
const crossword = require('../schema/Crossword');
const fillblank = require('../schema/FillBlank');
const multiplechoice = require('../schema/MultipleChoice');
const truefalse = require('../schema/TrueFalse');
const worddefinition = require('../schema/WordDefinition');
const wordsearch = require('../schema/WordSearch');

module.exports = {
    Query: {
        
        async getCrosswords() {
            try {
                const crosswords = await crossword.find();
                return crosswords;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getFillBlanks() {
            try {
                const fillblanks = await fillblank.find();
                return fillblanks;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getMultipleChoices() {
            try {
                const multiplechoices = await multiplechoice.find();
                return multiplechoices;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getTrueFalses() {
            try {
                const truefalses = await truefalse.find();
                return truefalses;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getWordDefinitions() {
            try {
                const worddefinitions = await worddefinition.find();
                return worddefinitions;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getWordSearches() {
            try {
                const wordsearches = await wordsearch.find();
                return wordsearches;
            } catch (err) {
                throw new Error(err);
            }
        }
    }



}