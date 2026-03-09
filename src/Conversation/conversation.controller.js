import Conversation from '../conversation.model.js';

export const getAllConversations = async (req, res) => {
    try {

        const conversations = await Conversation.find({ deletedAt: null })
            .populate('user1Id user2Id', 'firstName lastName email');

        res.status(200).json({
            success: true,
            data: conversations
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener conversaciones',
            error: error.message
        });
    }
};

export const deleteConversation = async (req, res) => {
    try {

        const { id } = req.params;

        const conversation = await Conversation.findById(id);

        if (!conversation) {
            return res.status(404).json({
                success: false,
                message: 'Conversación no encontrada'
            });
        }

        conversation.deletedAt = new Date();
        await conversation.save();

        res.status(200).json({
            success: true,
            message: 'Conversación eliminada'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error eliminando conversación',
            error: error.message
        });
    }
};