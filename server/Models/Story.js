import mongoose from "mongoose";


const storySchema = new mongoose.Schema({
    user: {type: String, ref: "User", required: true},
    content: {type: String },
    media_url: {type: String},
    media_type: {type: String, enum: ['text', 'image', 'video']},
    background_color: {type: String},
    view_count: [{type: String, ref: "User", }],}, {timestamps: true, minimize: false}
)
const Story = mongoose.model('Post', storySchema)

export default Story