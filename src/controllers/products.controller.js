//Importar modelo de producto
import { restart } from 'nodemon'
import Product from '../models/Products'

export const createProduct = async(req, res) => {
    //Destructuración
    const {name, category, price, imgURL} = req.body
    //console.log(req.body)
    const newProduct = new Product({name, category, price, imgURL})
    //Guardar en BD (await por que es unatarea que puede tomar tiempo)
    const productSaved = await newProduct.save()
    //Devolver estado de producto creado con su datos de creación
    res.status(201).json(productSaved)
}

export const getProducts = async(req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
}

export const getProductById = (req, res) => {
    
}

export const updateProductById = (req, res) => {
    
}
export const deleteProductById = (req, res) => {
    
}