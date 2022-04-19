//chamando a aplicação principal
const App = require("./app.ts");

//abrindo a porta de conexao do servidor
App.app.listen(process.env.PORT || 4200, () => console.log("Servidor está rodando na porta 4200"));

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', ()=> process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução foi interrompida', ()=> process.exit(0)));
