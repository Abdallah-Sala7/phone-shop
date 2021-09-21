import productes from './producte.json'
import newProducts from './newproduct.json'

export function GetAll(){
    return Promise.resolve(productes)
}

export function GetById(id){
    const product = productes.find(item => item.id === id)
    return Promise.resolve(product)
}

export function GetNewProduct(){
    return Promise.resolve(newProducts)
}

export function GetNewProductById(id) {
    const product = newProducts.find(item => item.id === id)
    return Promise.resolve(product)
}