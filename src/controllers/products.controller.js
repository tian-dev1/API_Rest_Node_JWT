//Importar modelo de producto
import { restart } from 'nodemon'
import Product from '../models/Products'

export const createProduct = (req, res) => {
    res.json('Creating Product')
}

export const getProducts = (req, res) => {
    res.json("Get Products!")
}

export const getProductById = (req, res) => {
    
}

export const updateProductById = (req, res) => {
    
}
export const deleteProductById = (req, res) => {
    
}