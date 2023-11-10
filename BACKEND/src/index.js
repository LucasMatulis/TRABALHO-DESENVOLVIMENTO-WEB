import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import jogoController from './controller/jogoController.js';
import admController from './controller/admController.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());


servidor.use(jogoController); 
servidor.use(admController);
servidor.use('/storage', express.static('./storage'))



const port = process.env.PORT;
servidor.listen(port, () => console.log(`API subiu na porta ${port}`));
