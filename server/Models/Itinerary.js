const { Schema, model } = require("mongoose")

const itinerarySchema = new Schema(
    {
        day: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true
        },
        morn: {
            type: String,
            minlength: 1,
            maxlength: 280
        },
        noon: {
            type: String,
            minlength: 1,
            maxlength: 280
        },
        eve: {
            type: String,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        }
    }
)

const Itinerary = model('Itinerary', itinerarySchema);
module.exports = Itinerary;

// itinerary
// - location
// - date
// - username
// - morningActivity
// - dayActivity
// - eveningActivity 