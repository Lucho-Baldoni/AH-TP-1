import mongoose from "mongoose";
const Schema = mongoose.Schema;

const beerCollection = 'Beers';

const beerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    brewery: {
        type: String,
        required: true,
    },
    alcoholContent: {
        type: Number,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const beerModel = mongoose.model(beerCollection, beerSchema);
export default beerModel;
