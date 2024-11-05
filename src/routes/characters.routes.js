import BaseRouter from './BaseRouter.js';
import charactersManager from '../dao/managers/charactersManager.js';

class charactersRouter extends BaseRouter {
    init () {
        this.post( '/', async function ( req, res, next ) {  // Insert a tag to a character
            const { character, tag, description } = req.body

            if ( !character || !tag || !description ) return res.sendError( 'All fields are required' )

            let response = await charactersManager.insertTag( character, tag, description )
            res.sendSuccess( response )
        } )
        this.delete( '/', async function ( req, res, next ) {
            const { character, tag } = req.body 

            if ( !character || !tag ) return res.sendError( 'All fields are required' )

            let response = await charactersManager.removeTag( character, tag )
            res.sendSuccess( response )
        })
    }
}

export default new charactersRouter().getRouter()