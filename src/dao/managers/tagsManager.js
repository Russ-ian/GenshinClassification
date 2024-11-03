import tagsModel from '../models/tags.js'
import persistenceFactory from '../persistenceFactory.js'

let manager = persistenceFactory( tagsModel )

class tagsManager extends manager {
    getTags () { // Get all tags
        return this.get()
    }
    findTag ( name ) { // Find tag by name
        return this.getBy( { name } )
    }
    createTag ( name, image, description ) { // Create tag
        return this.create ( { name, image, description } )
    }
    removeTag ( name ) { // Remove tag by name
        return this.delete( { name } )
    }
}

export default new tagsManager()