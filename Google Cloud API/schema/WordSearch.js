import { model, Schema } from 'mongoose';


// this is the schema for the word search questions
// title is the question
// words is an array of strings that are the words
// correct is the index of the correct answer in the words array
// concept is the concept tag that the question is about
const WordSearchSchema = new Schema({
    title: String,
    words: [String],
    correct: Number,
    concept: String,
});

module.exports = model('WordSearch', WordSearchSchema);