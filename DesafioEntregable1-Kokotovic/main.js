class ProductManager {
    constructor () {
        this.products = []
    }

    addProduct (product) {
        if (product.title === ''
            || product.description === ''
            || product.price === ''
            || product.thumbnail === ''
            || product.code === ''
            || product.stock === '') {
                console.log('Error: Todos los campos son obligatorios')
                return 'Error: Todos los campos son obligatorios'
            }
            
            const productRepeated = this.products.findIndex ( (newProduct) => newProduct.code === product.code)

            if (productRepeated !== -1) {
                console.log('Error: Codigo Repetido')
                return 'Error: Codigo Repetido'
            }

            const newProduct = {
                id: this.products.length +1,
                title: product.title,
                description: product.description,
                price: product.price,
                thumbnail: product.thumbnail,
                code: product.code,
                stock: product.stock
            }

            this.products.push(newProduct)
            
            return newProduct
        }

    getProducts () {
        return this.products
    }

    getProductById (id) {
        const search = this.products.findIndex( (product) => product.id === id)
        if(!search) {
            const error = 'Not Found'
            console.log(error)
            return error
        }
        return search
    }
}

const manager = new ProductManager ()

const product1 = {
    title: 'product1',
    description: 'description1',
    price: 'price1',
    thumbnail: 'thumbnail1',
    code: 'code1',
    stock: 'stock1'
}

manager.addProduct(product1)

const product2 = {
    title: 'product2',
    description: 'description2',
    price: 'price2',
    thumbnail: 'thumbnail2',
    code: 'code2',
    stock: 'stock2'
}

manager.addProduct(product2)

const product3 = {
    title: 'product3',
    description: 'description3',
    price: 'price3',
    thumbnail: 'thumbnail3',
    code: 'code3',
    stock: 'stock3'
}

manager.addProduct(product3)

console.log(manager.getProducts())

const array1 = manager.getProductById(1)
const array2 = manager.getProductById(2)
const array3 = manager.getProductById(3)
const array4 = manager.getProductById(4)

console.log({
    array1,
    array2,
    array3,
    array4
})