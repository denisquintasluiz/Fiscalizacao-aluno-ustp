import Fiscalizacao from './repository';

class FiscalizacaoController {
    constructor() { }

    getAll() {
        return Fiscalizacao.find({});
    }

    getByID(id) {
        return Fiscalizacao.findById(id);
    }

    getByCodNumber(codigoescolar){
        return Fiscalizacao.findOne(codigoescolar);
    }

    create(fiscalizacao) {
        return Fiscalizacao.create(fiscalizacao);
    }

    update(id, fiscalizacao) {
        const updateFiscalizacao = {
            nome: fiscalizacao.nome,
            apelido: fiscalizacao.apelido,
            zona: fiscalizacao.zona,
            anoescolar: fiscalizacao.anoescolar,
            turma: fiscalizacao.turma,
            idade: fiscalizacao.idade,
            curso: fiscalizacao.curso,
            departamento: fiscalizacao.departamento,
            polouniversitario: fiscalizacao.polouniversitario,
            periodoestudo: fiscalizacao.periodoestudo,
            foto: fiscalizacao.foto,
            numerocadeiraematraso: fiscalizacao.numerocadeiraematraso,
            codigoescolar: fiscalizacao.codigoescolar,
            email: fiscalizacao.email,
            distrito: fiscalizacao.distrito,
            nota: fiscalizacao.nota, 
            maiornotapauta: fiscalizacao.maiornotapauta,
            menornotapauta: fiscalizacao.menornotapauta
        }
        return Fiscalizacao.findByIdAndUpdate(id, updateFiscalizacao);
    }

    delete(id) {
        return Fiscalizacao.remove(id);
    }
}

export default new FiscalizacaoController();
