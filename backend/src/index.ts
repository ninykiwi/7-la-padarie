import express, { Request, Response } from 'express';
import { configDotenv } from "dotenv"
import addPessoa from './components/addPessoa';
import countPaes from './components/countPaes';
import countPessoa from './components/countPessoa';
import countEntrada from './components/countEntrada';
import deletePessoa from './components/deletePessoa';
import getHistorico from './components/getHistorico';
import getFila from './components/getFila';

configDotenv()

const app = express()
app.use(express.json());
const port = 3000
const router = express.Router();


app.post('/create', addPessoa.pessoa);

app.get('/totalpaes' , countPaes.somarQuantidadePaes);

app.get('/totalpessoas' , countPessoa.contabilizarPessoas);

app.get('/totalentrada' , countEntrada.entrada);

app.delete('/delete', deletePessoa.delete);

router.get('/historico', getHistorico.getHistorico);
router.get('/fila', getFila.getFila);

app.listen(port, () => {
    console.log(`Server ir running ${port}`)
  })
  