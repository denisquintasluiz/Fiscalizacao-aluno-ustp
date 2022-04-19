//chamando o express (criar rotas)
import * as express from "express";
//chamando o cors(serve para definir a permissão da requisição ao servidor)
import * as cors from 'cors';
//chamando o morgan (serve para criar logs)
import * as morgan from 'morgan';
//chamando o body-parser (converte os dados em json)
import * as bodyParser from "body-parser";
//chamando a classe DataBase
import  DataBase from "./config/db";
//importando a classe onde tem todas as rotas
import FiscalizacaoRoutes from './modules/fiscalizacao-aluno/routes';
//chamando o dot Env
import * as dotenv from 'dotenv';

//import DataBase from "./config/mongo";

//criando a Classe
class App {
    public app: express.Application;
    private morgan: morgan.TokenIndexer;
    private bodyParser;
    private database: DataBase;
    //private database;

    constructor(){
        dotenv.config();

        this.app = express();
        this.middleware();
        this.routes();
        this.database = new DataBase();
        this.dataBaseConnection();
    }

    dataBaseConnection(){
        this.database.createConnection();
    }

    closeDataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback())
    }

    middleware(){
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    routes(){
        this.app
        .route("/")
        .get((req,res) => res.status(200).json({
            "mensagem": "Olá, Seja Bem vindo ao meu Webservice!",
            "usabilidade": "Para usufruir deste serviço acrecente no endereço da pagina web o caminho abaixo:",
            "urlServico": "/webservice/fiscalizacao/alunos/codigoescolar(4899, este seria um exemplo)"
        }))
        this.app.route('/webservice/fiscalizacao').get(FiscalizacaoRoutes.getAll);
        this.app.route('/webservice/fiscalizacao/:id').get(FiscalizacaoRoutes.getByID);
        this.app.route("/webservice/fiscalizacao/alunos/:codigoescolar").get(FiscalizacaoRoutes.getByCodNumber)
        this.app.route('/webservice/fiscalizacao').post(FiscalizacaoRoutes.create);
        this.app.route('/webservicefiscalizacao/:id').put(FiscalizacaoRoutes.update);
        this.app.route('/webservice/fiscalizacao/:id').delete(FiscalizacaoRoutes.delete);
    }
}


//export default new App();
module.exports = new App;
