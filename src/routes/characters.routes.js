import BaseRouter from './BaseRouter.js';
import charactersManager from '../dao/managers/charactersManager.js';

class charactersRouter extends BaseRouter {
    init () {
        this.post( '/', async function ( req, res, next ) { 
            const { character, tag, description } = req.body

            console.log( req.body )

            if ( !character || !tag || !description ) return res.sendError( 'All fields are required' )

            let response = await charactersManager.insertTag( character, tag, description )
            res.sendSuccess( response )
        } )
    }
}

export default new charactersRouter().getRouter()