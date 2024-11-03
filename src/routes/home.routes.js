import BaseRouter from './BaseRouter.js'

class homeRouter extends BaseRouter {
    init () {
        this.get( '/', function ( req, res, next ) {
            res.render( 'mainPage/index.ejs' )
        })
    }
}

export default new homeRouter().getRouter()