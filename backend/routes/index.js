const {Router} = require('express');
const router = Router();
 // ,deleteEmpleado,updateEmpleado
const {getEmpleados,crearEmpleado,getEmpleadosById } = require('../controllers/index')  //se deben aregar los routes de delete y update

router.get('/empleados',getEmpleados)
router.get('/empleados/:id',getEmpleadosById)
router.post('/empleados',crearEmpleado)
/* router.delete('/empleados/:id',deleteEmpleado)
router.put('/empleados/:id',updateEmpleado) */


module.exports = router;