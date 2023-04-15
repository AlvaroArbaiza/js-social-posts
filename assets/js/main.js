const posts = [
    {
        "id": 1,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
          "name": "Phil Mangione",
          "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
          "name": "Sofia Perlari",
          "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
          "name": "Chiara Passaro",
          "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
          "name": "luca formicola",
          "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
          "name": "Alessandro Sainato",
          "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }              
]

const rowHtml = document.querySelector('.row')


/*--------------------------------------------- funzioni custom stile arrow ------------------------------*/
/* Funzione per ribaltare la data */
const ribaltaData = ( dataAmericana ) => dataAmericana.split('-').reverse().join('/')


/* Genero le card in pagina */

posts.forEach( (element, index)=>{
    
    const { content, media, author, likes, created } = element

    rowHtml.innerHTML += `
    <div class="col-12">
        <div class="card">
            <div class="p-3">
                <div class="d-flex align-items-center ">
                    ${ ( author.image !== null ) ? stampaAvatar( author ) : mancaAvatar( author ) }
                    <div class="ms-3">
                        <span class="d-block">${author.name}</span>
                        <span class="d-block">${ ribaltaData( created ) }</span>
                    </div>
                </div>
                <p class="mt-3">${content}</p>
            </div>
            <img src="${media}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <button id='button-${index}'>Mi piace</button>
                    </div>
                    <div>
                        <span id='like-${index}'>${likes} Likes</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `


} )

//Click buttone mi piace e aggiunta di like una sola volta
posts.forEach( (element, index)=>{

    let singoloElemento = document.getElementById(`button-${index}`)

    singoloElemento.addEventListener('click', function(event){

        let oldValueLike = parseInt(document.getElementById(`like-${index}`).innerText)
        console.log( oldValueLike++ )
        document.getElementById(`like-${index}`).innerText = oldValueLike++ + ' Likes'

        singoloElemento.style.pointerEvents = 'none'
        singoloElemento.style.cursor = 'default'

    })
} )




/*--------------------------------------------- funzioni custom da richiamare ------------------------------*/

function stampaAvatar( dataAuthor ){
    /*
    dataAuthor => "author": {
          "name": "Phil Mangione",
          "image": "https://unsplash.it/300/300?image=15"
    },
    */

    //Destrutturizzazione delle chiavi di author
    const { image } = dataAuthor

    return `<img src="${image}" class="rounded-circle" alt="" width="80" height="80">`
}

function mancaAvatar( dataAuthor ){
    //DataAuthor = Author in fase di invocazione della funzione
    /*
    dataAuthor => "author": {
          "name": "Phil Mangione",
          "image": "https://unsplash.it/300/300?image=15"
    },
    */

    //Destrutturizzazione delle chiavi di author
    const { name } = dataAuthor

    /*Cerco di estrarre dal nome le iniziali */
    //Separo le parole del nome: esempio Luca Formicola
    const arrayParole = name.split( ' ' )
    console.log( arrayParole )

    const letters = arrayParole.map( (element)=>{
        return element[0].toUpperCase()
    } )

    console.log( letters )

    //unisco gli elementi L e F in una sola stringa e non più un array
    const lettersString = letters.join( '' )

    return `
        <div class="bg-success rounded-circle d-flex align-items-center justify-content-center text-white fs-3" style="width: 80px; height: 80px">
            <span>${ lettersString }</span>
        </div>
    `

}
