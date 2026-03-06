
import { Router } from 'express';
import { createSkill, updateSkill, deactivateSkill, getAllSkillsAdmin } from './skill.controller.js';
import { validateJWT, isAdmin } from '../../middlewares/validate-jwt.js';

const router = Router();

// Todas las rutas de Admin requieren Token y Rol de Admin
router.post('/', [validateJWT, isAdmin], createSkill);
router.put('/:id', [validateJWT, isAdmin], updateSkill);
router.patch('/:id', [validateJWT, isAdmin], deactivateSkill); // Patch porque es desactivación parcial
router.get('/', [validateJWT, isAdmin], getAllSkillsAdmin);

export default router;