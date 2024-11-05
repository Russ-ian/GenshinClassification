let create = document.getElementsByClassName( 'create' )[0]
let image = document.getElementsByClassName( 'image' )[0]
let remove = document.getElementsByClassName( 'remove' )[0]

create.addEventListener( 'click', function ( e ) {
    e.preventDefault()

    const formData = new FormData();
    formData.append( 'tagName', 'aaa' );
    formData.append( 'tagDescription', 'bbb' );
    formData.append( 'image', image.files[0] )

    fetch( '/tags', {
        method: 'POST',
        body: formData // Convierte el objeto a una cadena JSON
    }).then( e => e.json() )
    .then( e => console.log( e ) );
})

remove.addEventListener( 'click', function ( e ) {
    e.preventDefault()

    fetch( '/tags', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( { tagName: 'aaa' } )
    }).then( e => e.json() )
    .then( e => console.log( e ) )
})

let characterCreate = document.getElementsByClassName( 'characterCreate' )[0]

characterCreate.addEventListener( 'click', function ( e ) {
    e.preventDefault()

    let data = {
        tagName: 'dps',
        tagDescription: 'qiqi-samas',
        group: 'test'
    }
    
    fetch( '/tags', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Especifica que se envían datos JSON
        },
        body: JSON.stringify( data )
    }).then( e => e.json() )
    .then( e => console.log( e ) );
})