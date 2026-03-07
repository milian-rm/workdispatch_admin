import Review from './review.model.js';

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
            .populate('reviewerId', 'firstName lastName')
            .populate('revieweredId', 'firstName lastName')
            .populate('serviceId');

        res.status(200).json({
            success: true,
            reviews
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener las reviews',
            error: error.message
        });
    }
};

export const deleteOffensiveReview = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedReview = await Review.findByIdAndUpdate(
            id,
            { Status: false },
            { new: true }
        );

        if (!deletedReview) {
            return res.status(404).json({ success: false, message: 'Review no encontrada' });
        }

        res.status(200).json({
            success: true,
            message: 'Review ofensiva ocultada del sistema (Soft Delete)',
            review: deletedReview
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la review',
            error: error.message
        });
    }
};