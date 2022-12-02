import { Router, Request, Response } from 'express';
import * as MailController from './controllers/mail.controller';

const router = Router();


router.get('/ping',(req: Request, res:Response) => {
    res.status(200).send({msg: "pong"});
});

router.get('/contact', MailController.contact);


export default router;