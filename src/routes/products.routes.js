import {Router} from 'express'
const router = Router()

//Importar funciones del products.controller
import * as productsCtrl from '../controllers/products.controller'

router.post('/', productsCtrl.createProduct)
router.get('/', productsCtrl.getProducts)
router.get('/:productId', productsCtrl.getProductById)
router.put('/:productId', productsCtrl.updateProductById)
router.delete('/:productId', productsCtrl.deleteProductById)

export default router