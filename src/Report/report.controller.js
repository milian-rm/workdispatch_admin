import Report from './report.model.js';

export const getAllReports = async (req, res) => {
    try {
        const reports = await Report.find()
            .populate('reporterId', 'firstName lastName')
            .populate('reporteredId', 'firstName lastName');

        res.status(200).json({ success: true, reports });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener los reportes', error: error.message });
    }
};

export const resolveReport = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Cambiamos el estado a false (Resuelto/Desactivado)
        const updatedReport = await Report.findByIdAndUpdate(
            id,
            { Status: false },
            { new: true }
        );

        if (!updatedReport) {
            return res.status(404).json({ success: false, message: 'Reporte no encontrado' });
        }

        res.status(200).json({
            success: true,
            message: 'Reporte marcado como resuelto/desactivado',
            report: updatedReport
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el reporte', error: error.message });
    }
};