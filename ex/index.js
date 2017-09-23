const logger = require('./logger')
import Pessoa from './pessoa'

logger.info('Usando o padrão CommonJS!')
const pessoa = new Pessoa('Blenno')
console.log(pessoa.toString())