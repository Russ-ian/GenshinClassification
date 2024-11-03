import charactersModel from '../models/characters.js'
import persistenceFactory from '../persistenceFactory.js'
import tagsManager from '../managers/tagsManager.js'

let manager = persistenceFactory( charactersModel )

class charactersManager extends manager {
    getCharacters () {
        return this.get().populate( 'tags.name' ).lean() // The property inside the object you want to populate, in this case the name
    }
    findCharacter ( name ) { // internal function
        return this.getBy( { name } )
    }
    createCharacter ( name ) { // internal function
        return this.create( { name } )
    }
    async insertTag ( character, tag, description ) { // Insert a tag to a character, if the character doesn't exist, creates it
        const tagInfo = await tagsManager.findTag( tag )
        let characterQuery = await this.findCharacter( character )
        
        if ( !tagInfo ) return 'Enter a valid tag'
        if ( !characterQuery ) {
            await this.createCharacter( character )
            characterQuery = await this.findCharacter( character )
        }

        characterQuery.tags.push( { name: tagInfo._id, description } )
        return await characterQuery.save();
    }
    async removeTag ( character, tag ) { // Remove a tag of a character
        const tagInfo = await tagsManager.findTag( tag )
        let characterQuery = await this.findCharacter( character )

        if ( !tagInfo ) return 'Enter a valid tag'
        if ( !characterQuery ) 'Character not found'

        characterQuery.tags = characterQuery.tags.filter( tag => tag.name.toString() !== tagInfo._id.toString() ) // tag.name and tagInfo._id are both ObjectId()
        return await characterQuery.save()
    }
}

export default new charactersManager()