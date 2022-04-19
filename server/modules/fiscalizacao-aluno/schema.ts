import * as mongoose from 'mongoose';

const FiscalizacaoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    apelido: {type: String, required: true},
    zona: {type: String,  required: true},
    anoescolar: {type: Number, required: true},
    turma: {type: String, required: true},
    idade: {type: Number, required: true},
    curso: {type: String, required: true},
    departamento: {type: String, required: true},
    polounivesitario: {type: String, required: true},
    periodoestudo: {type: String, required: true},
    foto: {type: String, required: true},
    numerocadeiraematraso: {type: Number, required: true},
    codigoescolar: {type: Number, unique: true,required: true},
    email: {type: String, required: true},
    distrito: {type: String, required: true},
    maiornotapauta: {type: Number, required: true},
    menornotapauta: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
});

export default FiscalizacaoSchema;
