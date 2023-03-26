import { model, Schema } from 'mongoose';

// this is the schema for the fill in the blank questions
// title is the question
// correct is the answer
// concept is the concept tag that the question is about
const FillBlankSchema = new Schema({
    title: String,
    correct: String,
    concept: String,
});


module.exports = model('FillBlank', FillBlankSchema);