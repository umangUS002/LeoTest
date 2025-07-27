import mongoose from "mongoose"

const contentSchema = mongoose.Schema({
    title: {type: String, required: true},
    date: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String},
    workCredit: {type: String},
    contentCredit: {type: String},
    type: {type: String, required: true},
    instaLink: {type: String},
    fbLink: {type: String},
    linkedinLink: {type: String},
}) 

const Content = mongoose.model('Content', contentSchema)

export default Content