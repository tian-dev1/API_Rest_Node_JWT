import {Router} from 'express'
const router = Router()

//Importar funciones del products.controller
import * as productsCtrl from '../controllers/products.controller'
//Importar Middlewares
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isModerator || authJwt.isAdmin], productsCtrl.createProduct)
router.get('/', [authJwt.verifyToken, authJwt.isModerator || authJwt.isAdmin || authJwt.isUser], productsCtrl.getProducts)
router.get('/:productId', [authJwt.verifyToken, authJwt.isModerator || authJwt.isAdmin || authJwt.isUser], productsCtrl.getProductById)
router.put('/:productId', [authJwt.verifyToken, authJwt.isModerator || authJwt.isAdmin], productsCtrl.updateProductById)
router.delete('/:productId', [authJwt.verifyToken, authJwt.isModerator || authJwt.isAdmin], productsCtrl.deleteProductById)

export default router