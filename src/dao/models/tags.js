import mongoose from 'mongoose'

const collection = 'tags'

const schema = new mongoose.Schema( {
    name: { type: String, required: true },
    image: { type: String }, // image URL location
    description: { type: String, required: true }
})

const tagsModel = mongoose.model( collection, schema )

export default tagsModel