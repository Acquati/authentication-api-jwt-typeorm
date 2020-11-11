import { createConnection } from 'typeorm'

createConnection().then(() => console.log('Successfully connect with database.')).catch(error => console.log(error))