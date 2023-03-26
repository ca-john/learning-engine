import { model, Schema } from 'mongoose';


// this is the schema for the multiple choice questions
// title is the question
// options is an array of strings that are the options
// correct is the index of the correct answer in the options array
// concept is the concept tag that the question is about
const MultipleChoiceSchema = new Schema({
    title: String,
    options: [String],
    correct: Number,
    concept: String,
});



module.exports = model('MultipleChoice', MultipleChoiceSchema);