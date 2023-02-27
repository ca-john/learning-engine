import { model, Schema } from 'mongoose';


// this is the schema for the word definition questions
// title is the question
// correct is the answer
// concept is the concept tag that the question is about
const WordDefinitionSchema = new Schema({
    title: String,
    correct: String,
    concept: String,
});


module.exports = model('WordDefinition', WordDefinitionSchema);