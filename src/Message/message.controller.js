import Message from '../message.model.js';

export const deleteMessage = async (req, res) => {
    try {

        const { id } = req.params;

        const message = await Message.findById(id);

        if (!message) {
            return res.status(404).json({
                success: false,
                message: 'Mensaje no encontrado'
            });
        }

        message.deletedAt = new Date();
        await message.save();

        res.status(200).json({
            success: true,
            message: 'Mensaje eliminado'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error eliminando mensaje',
            error: error.message
        });
    }
};