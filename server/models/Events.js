import mongoose from "mongoose"

const eventSchema = mongoose.Schema({
    name: {type: String, required: true},
    status: {type: String, required: true},
    date: {type: String, required: true},
    venue: {type: String},
    image: {type: String, required: true},
    teamSize : {type: String},
    description: {type: String, required: true},
}) 

const Event = mongoose.model('Event', eventSchema)

export default Event