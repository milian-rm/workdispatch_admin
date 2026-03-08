'use strict';
import 'dotenv/config';

// Importaciones
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { corsOptions } from './cors-configuration.js';
import { dbConnection } from './db.js';
import { helmetConfiguration } from './helmet-configuration.js';
import { requestLimit } from '../middlewares/request-limit.js';
import { errorHandler } from '../middlewares/handle-errors.js';

// Importaciones de Rutas
const BASE_URL = '/workDispatch/v1';
<<<<<<< HEAD
import reviewRoutes from '../src/Review/review.routes.js';
import notificationRoutes from '../src/Notification/notification.routes.js';
import reportRoutes from '../src/Report/report.routes.js';


=======
import WorkerPortFolioRoutes from '../src/WorkerPortFolio/WorkerPortFolio.routes.js';
import ProposalModel from '../src/Proposal/Proposal.routes.js';
import ServiceRoutes from '../src/Service/Service.routes.js';
>>>>>>> ft/DiegoLopez

const middleware = (app) => {
    app.use(helmet(helmetConfiguration));
    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: false, limit: '10mb' }));
    app.use(express.json({ limit: '10mb' }));
    app.use(requestLimit);
    app.use(morgan('dev'));
}

const routes = (app) => {
<<<<<<< HEAD
app.use(`${BASE_URL}/reviews`, reviewRoutes);
app.use(`${BASE_URL}/notifications`, notificationRoutes);
app.use(`${BASE_URL}/reports`, reportRoutes);
=======
    app.use(`${BASE_URL}/PortFolio`, WorkerPortFolioRoutes);
    app.use(`${BASE_URL}/Proposal`, ProposalModel);
    app.use(`${BASE_URL}/Service`, ServiceRoutes);
>>>>>>> ft/DiegoLopez
}

const initServer = async () => {
    const app = express();
    const PORT = process.env.PORT || 3001;

    try {
        await dbConnection();
        middleware(app);

        // Las rutas deben cargarse ANTES que el manejador de errores
        routes(app);
        app.use(errorHandler);

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
            console.log(`Base URL: http://localhost:${PORT}${BASE_URL}`);
        });

    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

export { initServer };