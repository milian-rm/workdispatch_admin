'use strict';

/**
 * MIDDLEWARE DE DESARROLLO PARA ADMIN (MOCK JWT)
 * Permite probar todas las rutas de Admin sin enviar tokens en Postman.
 */

export const validateJWT = async (req, res, next) => {
    // Inyectamos un usuario administrador simulado
    req.user = { 
        _id: 'admin_mock_id_123', 
        Role: 'ADMIN' 
    }; 

    console.log(`[ADMIN MOCK] Acceso concedido automáticamente como ADMIN`);
    next();
};

/**
 * Middleware de autorización 
 */
export const isAdmin = (req, res, next) => {
    
    // Como validateJWT siempre inyecta 'ADMIN', esto siempre pasará
    if (!req.user || req.user.Role !== 'ADMIN') {
        return res.status(403).json({ 
            success: false, 
            message: 'Acceso denegado: Se requiere rol de Administrador' 
        });
    }
    next();
};