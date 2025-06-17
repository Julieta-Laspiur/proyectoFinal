import express from 'express';
import { errorHandlerMiddleware } from './error_handler_middleware.js';
import {logMiddleware} from './log_middleware.js';
import { authorizationMiddleware } from './authorization_middleware.js';
import {controllers} from '../controllers/controllers.js';

export default function configureMiddleware(router){
    router.use(express.json());
    router.use(logMiddleware);
    router.use(authorizationMiddleware);

    controllers(router);

    router.use(errorHandlerMiddleware);

}