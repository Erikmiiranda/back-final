import { Router } from 'express'
import UsuarioController from './app/controllers/UsuarioController.js'

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger-output.json' assert { type: 'json' };


const router = Router ()

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
router.get('/doc', swaggerUi.setup(swaggerDocument))

//ROTAS

//Buscar informações do usuario
router.get('/usuario/:id', UsuarioController.index)

//Loign
router.post('/usuario/login', UsuarioController.show) 

//Registro
router.post('/usuario',UsuarioController.store)

//Editar
router.put('/usuario/:id',UsuarioController.update)

//Deletar
router.delete('/usuario/:id', UsuarioController.delete )

export default router
