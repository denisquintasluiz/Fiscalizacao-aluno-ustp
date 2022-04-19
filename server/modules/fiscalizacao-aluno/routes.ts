import FiscalizacaiController from './controller';
import * as httpStatus from 'http-status';

const sendResponse = function(res, statusCode, data) {
  res.status(statusCode).json({ result: data });
};

class FiscalizacaoRoutes {
  constructor() {}

  getAll(req, res) {
    FiscalizacaiController.getAll()
      .then(fiscalizacao => sendResponse(res, httpStatus.OK, fiscalizacao))
      .catch(err => {
        console.error('Erro: ' + err);
        sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {});
      });
  }

  getByID(req, res) {
    const id = { _id: req.params.id };

    if (!id) {
      sendResponse(res, httpStatus.OK, 'Registro não encontrado!');
    }

    FiscalizacaiController.getByID(id)
      .then(fiscalizacao => sendResponse(res, httpStatus.OK, fiscalizacao))
      .catch(err => {
        console.error('Erro: ' + err);
        sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {});
      });
  }

  //criando a funcao da rota que faz filtro pelo codigoescolar do aluno
  getByCodNumber(req, res){
    const codigoescolar = {codigoescolar: req.params.codigoescolar};
    
    if(!codigoescolar){
      sendResponse(res, httpStatus.OK, "Registro não encontarado!")
    } 
     
     FiscalizacaiController.getByCodNumber(codigoescolar)
     .then(fiscalizacao => sendResponse(res, httpStatus.OK, fiscalizacao))
     .catch(erro =>{
          console.error("Erro: "+ erro);
          sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {});
     })
  }

  create(req, res) {
    const fiscalizacao = req.body;
    FiscalizacaiController.create(fiscalizacao)
      .then(fiscalizacao =>
        sendResponse(res, httpStatus.CREATED, 'Registro criado com sucesso!'),
      )
      .catch(err => {
        console.error('Erro: ' + err);
        sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {});
      });
  }

  update(req, res) {
    const id = { _id: req.params.id };
    const fiscalizacao = req.body;
    FiscalizacaiController.update(id, fiscalizacao)
      .then(fiscalizacao => sendResponse(res, httpStatus.OK, 'Registro alterado!'))
      .catch((err) => {
        console.error('Erro: ' + err);
        sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {});
      });
  }

  delete(req, res) {
      const id = { _id: req.params.id };
      FiscalizacaiController.delete(id)
      .then(result => sendResponse(res, httpStatus.OK, result))
      .catch((err) => {
        console.error('Erro: ' + err);
        sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, {});
      });
  }
}

export default new FiscalizacaoRoutes();
