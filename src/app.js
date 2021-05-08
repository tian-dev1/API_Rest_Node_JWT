import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import productsRoutes from './routes/products.routes'

const app = express()
//Para que entienda los json que se le envian al servidor
app.use(express.json())
//Guardar info del package.json
app.set('pkg', pkg)

//Mostar info de las ruta en consola
app.use(morgan('dev')
)
//Ruta por defecto
app.get('/',(req, res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
    })
})

//obteniendo rutas de products.routes
app.use('/products', productsRoutes)

export default app