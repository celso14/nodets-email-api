import { Request, Response } from 'express';
import nodeMailer from 'nodemailer';

export const contact = async (req: Request, res: Response) => {

    let transport = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "3d9dd5428e6bc1",
          pass: "4df85ea7bcbd94"
        }
    });


    let message = {
        from: 'VINI JR',
        to: 'hexa@hotmail.com',
        subject: 'Hello World!',
        html: '<strong>Olá</strong>, como vai?',
        text: 'Olá, como vai?'
    }

    
    let info = await transport.sendMail(message);


    console.log(info);


    res.json({success: true});
}