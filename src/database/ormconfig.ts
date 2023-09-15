import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { join } from "path"

dotenv.config()

const dataBase = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE || './db.sqlite',
    entities: [
        join(__dirname, '..', 'models/*.{ts,js}')
    ],
    logging: true,
    synchronize: true
})

dataBase.initialize()
.then(() => {
    console.log('Banco conectado com sucesos!')
})
.catch((erro)=>{
    console.log('Erro ao conectar ao banco!', erro)
})

export default dataBase