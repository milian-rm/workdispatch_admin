'use strict';

import User from './user.model.js';

export const getUsers = async (req, res) => {
    try {

        const users = await User.find();

        res.status(200).json({
            success: true,
            data: users
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener usuarios',
            error: error.message
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (user.active === false) {
            return res.status(403).json({
                success: false,
                message: 'Usuario inactivo'
            });
        }

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Correo o contraseña incorrectos'
            });
        }

        if (user.role !== 'ADMIN') {
            return res.status(403).json({
                success: false,
                message: 'No autorizado: solo administradores pueden iniciar sesión'
            });
        }

        if (user.active === false) {
            return res.status(403).json({
                success: false,
                message: 'Usuario inactivo'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Inicio de sesión de administrador exitoso',
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al iniciar sesión',
            error: error.message
        });
    }
};

export const changeUserStatus = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        user.active = !user.active;

        await user.save();

        res.status(200).json({
            success: true,
            message: `Estado del usuario cambiado a ${user.active ? 'ACTIVO' : 'INACTIVO'}`,
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error cambiando estado del usuario',
            error: error.message
        });
    }
};