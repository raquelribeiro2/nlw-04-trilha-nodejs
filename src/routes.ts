import { Router } from 'express';

import { UserController } from './controllers/UserController';
import { SurveyController } from './controllers/SurveyController';
import { SendMailController } from './controllers/SendMailController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const usersController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post('/users', usersController.create);

router.get('/surveys', surveyController.show);
router.post('/surveys', surveyController.create);

router.post('/sendmail', sendMailController.execute);

router.get('/answers/:value', answerController.execute);

router.get('/nps/:survey_id', npsController.execute);

export { router };

