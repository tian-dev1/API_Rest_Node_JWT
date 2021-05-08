import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

const app = express()

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

export default app