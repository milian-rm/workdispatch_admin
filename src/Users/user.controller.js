import User from './user.model.js';
import { cloudinary } from '../../middlewares/file-uploader.js';


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

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener usuario',
            error: error.message
        });
    }
};

export const createUser = async (req, res) => {
    try {
        const data = req.body;

        if (req.file){
            const extension = req.file.path.split('.').pop();
            const filename = req.file.filename;
            const relativePath = filename.substring(filename.indexOf('users/'));

            data.profilePhoto = `${relativePath}.${extension}`;
        } else {
            data.profilePhoto = `users/default-profile.png`;
        }

        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'El correo ya está registrado'
            });
        }

        const user = new User(data);
        await user.save();

        res.status(201).json({
            success: true,
            message: 'Usuario creado correctamente',
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear usuario',
            error: error.message
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        if (req.file){
            const currentUser = await User.findById(id);

            if (currentUser && currentUser.profilePhoto) {
                const photoPath = currentUser.profilePhoto;
                const photoWithoutExt = photoPath.substring(0, photoPath.lastIndexOf('.'));
            };
            const publicId = `workDispatch/${photoWithoutExt}`;

            try {
                await cloudinary.uploader.destroy(publicId);
            } catch (deleteError) {
                console.error('Error al eliminar imagen anterior:', deleteError);
            }
        }

        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        const userUpdated = await User.findByIdAndUpdate(
            id,
            data,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: 'Usuario actualizado correctamente',
            data: userUpdated
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar usuario',
            error: error.message
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

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
            data: user
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