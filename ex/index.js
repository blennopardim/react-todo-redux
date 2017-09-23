const logger = require('./logger')
import Pessoa from './pessoa'

const product = {
    name: 'Pen Bic Black',
    price: 1.90,
    discount: 0.05
}

function clone(object) {
    return { ...object}
}

const newProduct = clone(product)
newProduct.name = 'Pen Bic Blue'

console.log(product, newProduct)

logger.info('Usando o padrão CommonJS!')
const pessoa = new Pessoa('Blenno')
console.log(pessoa.toString())