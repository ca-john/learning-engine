import { model, Schema } from 'mongoose';


// this is the schema for the true false questions
// title is the question
// correct is the answer, true or false
// concept is the concept tag that the question is about
const TrueFalseSchema = new Schema({
    title: String,
    correct: Boolean,
    concept: String,
});


module.exports = model('TrueFalse', TrueFalseSchema);