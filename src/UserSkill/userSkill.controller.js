'use strict';

import UserSkill from './userSkill.model.js';

/**
 * ADMIN: Ver todas las UserSkills del sistema
 * Se eliminaron los populates de modelos no registrados para evitar el crash.
 */
export const getAllUserSkillsAdmin = async (req, res) => {
    try {
        // Obtenemos los datos sin intentar poblar Skill o Category
        const data = await UserSkill.find()

        res.status(200).json({
            success: true,
            total: data.length,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener las habilidades de usuarios',
            error: error.message
        });
    }
};