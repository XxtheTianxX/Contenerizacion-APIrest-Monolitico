const { Router } = require('express');

const  { 
    createTipoProyecto,
    getTiposProyectos,
    getTipoProyectoPorId,
    updateTipoProyectoPorId
} = require('../controllers/tipoProyecto');

const router = Router();

/**
 * Obtiene todos
 */
router.get('/', getTiposProyectos);

/**
 * Obtiene  por id
 */
 router.get('/:id', getTipoProyectoPorId);

/**
 * Crear 
 */
router.post('/', createTipoProyecto);

/**
 * Actualiza por id
 */
router.put('/:id', updateTipoProyectoPorId);

module.exports = router;