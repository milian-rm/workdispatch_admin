'use strict';

import UserSkill from './userSkill.model.js';

// ADMIN: Ver todas las UserSkills del sistema 
export const getAllUserSkillsAdmin = async (req, res) => {
    try {
        const data = await UserSkill.find()
            .populate('userId', 'firstName lastName Email')
            .populate('skillId', 'name');

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