'use strict';

import WorkerPortfolio from './WorkerPortFolio.model.js';

// ADMIN: Ver todos los Portafolios (incluyendo activos e inactivos)
export const getAllPortfolios = async (req, res) => {
    try {
        // El admin suele querer ver todo para auditar, 
        // podemos añadir el populate para saber de quién es cada trabajo
        const portfolios = await WorkerPortfolio.find()
            .populate('workerId', 'name email'); // Ajusta según tus campos de User

        return res.send({ 
            success: true, 
            portfolios 
        });
    } catch (err) {
        return res.status(500).send({ 
            success: false, 
            message: 'Error al obtener todos los portafolios',
            err: err.message 
        });
    }
};

// ADMIN: Desactivar Registros Inadecuados (o reactivarlos)
export const moderateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const record = await WorkerPortfolio.findById(id);

        if (!record) return res.status(404).send({ success: false, message: 'Registro no encontrado' });

        // Cambiamos el estado (Toggle)
        record.status = record.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
        record.deletedAt = record.status === 'INACTIVE' ? new Date() : null;

        await record.save();

        return res.send({ 
            success: true, 
            message: `El registro ha sido marcado como ${record.status} por el Administrador`, 
            record 
        });
    } catch (err) {
        return res.status(500).send({ 
            success: false, 
            message: 'Error al moderar el registro',
            err: err.message 
        });
    }
};