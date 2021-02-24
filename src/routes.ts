import { Router } from 'express';

import { UserController } from './controllers/UserController';
import { SurveyController } from './controllers/SurveyController';

const router = Router();

const usersController = new UserController();
const surveyController = new SurveyController();

router.post('/users', usersController.create);

router.get('/surveys', surveyController.show);
router.post('/surveys', surveyController.create);

export { router };

