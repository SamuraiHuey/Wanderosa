const { Schema } = require("mongoose")

const

const itenerarySchema = new Schema(
    {
        day: {
            type: String,
            required: true,
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

const Itenerary = model('Itenerary', itenerarySchema);
module.exports = Itenerary;

// itenerary
// - location
// - date
// - username
// - morningActivity
// - dayActivity
// - eveningActivity 