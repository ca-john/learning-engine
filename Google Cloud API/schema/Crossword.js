import { model, Schema } from 'mongoose';


// this is the schema for the crossword questions
// title is the question
// clues is an array of strings that are the clues
// answers is an array of strings that are the answers
// correct is the index of the correct answer in the answers array
// concept is the concept tag that the question is about
const CrosswordSchema = new Schema({
    title: String,
    clues: [String],
    answers: [String],
    correct: Number,
    concept: String,
});


module.exports = model('Crossword', CrosswordSchema);