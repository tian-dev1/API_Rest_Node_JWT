import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
//importar el archivo de rutas de productos
import productsRoutes from './routes/products.routes'
//importar el archivo de rutas de usuario
import authRoutes from './routes/auth.routes'


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
app.use('/api/products', productsRoutes)
//obteniendo rutas de user.routes
app.use('/api/auth', authRoutes)

export default app