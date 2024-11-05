import mongoose from 'mongoose'

const collection = 'characters'

const schema = new mongoose.Schema( {
    name: { type: String },
    tags: [ new mongoose.Schema({
        name: { type: mongoose.Schema.Types.ObjectId, ref: 'tags' },
        description: { type: String }
    }) ]
})

const charactersModel = mongoose.model( collection, schema )

export default charactersModel