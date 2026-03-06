
import { Router } from 'express';
import { createSkill, updateSkill, deactivateSkill, getAllSkillsAdmin } from './skill.controller.js';
import { validateJWT, isAdmin } from '../../middlewares/validate-jwt.js';
import { validateCreateSkill, validateSkillId } from '../../middlewares/skill-validator.js';

const router = Router();

// Todas las rutas de Admin requieren Token y Rol de Admin
router.post('/', [validateJWT, isAdmin, validateCreateSkill], createSkill);
router.put('/:id', [validateJWT, isAdmin, validateSkillId, validateCreateSkill], updateSkill);
router.patch('/:id', [validateJWT, isAdmin, validateSkillId], deactivateSkill);
router.get('/', [validateJWT, isAdmin], getAllSkillsAdmin);

export default router;