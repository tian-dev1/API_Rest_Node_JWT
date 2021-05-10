import {Router} from 'express'
const router = Router()

//Importar controlardor de auth
import * as authCtrl from '../controllers/auth.controller'

router.post('/signup', authCtrl.signUp)
router.post('/signin', authCtrl.signIn)

export default router