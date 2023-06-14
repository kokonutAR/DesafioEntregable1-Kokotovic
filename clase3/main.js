function a () {
    console.log('a')
}

function b () {
    console.log('b')
    for ( let i = 0; i <= 200; i++ ){
        console.log('b2')
    }
}

function c () {
    console.log('c')
}

b()
c()
a()

const escribeArchivoFake = (callback) => [
    setTimeout(() => {
        console.log('Simulando escribir en el archivo...')

        callback(null, 'mywebsite.com/statics7file.pdf')
    }, 1000)
]

console.log('Inicio mi programa')

const callbackFn = (err, ruta) => {
    if (err !== null) {
        console.log(`Ocurrio un error: ${err}`)
    
        return
    }

    console.log(`El archivo quedo guardado en ${ruta}, procedemos a guardar el registro en base de datos`)

    console.log('Termino el programa')
}

const respuesta = escribeArchivoFake(callbackFn) //No va a interrumir el flujo de ejecucion. No bloqueante. Asincronico.

console.log('Termino mi programa')


// PROMESAS

const dividir = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            return reject ('Error: No puedes dividir sobre 0')
        }
        return resolve (a / b)    
    }) 
}

const fn = async () => {
    const resultado = await dividir (4,2)

    console.log({resultado})
}

fn()

process.exit()

dividir(8, 2)
    .then((result) => {
        console.log({result})

        return(9,3)
    })
    .then((result2) =>{
        console.log(result2)
    }) 
    .catch((err) => {
        console.log({err})
    })
























