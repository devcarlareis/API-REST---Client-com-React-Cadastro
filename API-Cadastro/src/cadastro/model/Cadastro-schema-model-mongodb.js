var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CadastroSchema = new Schema({
    Nº: {
        type: String
    },
    NOME_DO_BENEFICIÁRIO:{
        type: String
    },
    RG: {
        type: String
    },
    NIS: {
        type: String
    },
    TELEFONE: {
        type: String
    },
    ENDEREÇO: {
        type: String
    },
    COMPOSIÇÃO_FAMILIAR: {
        type: String
    },
    TOTAL_FAMILIAR: {
        type: String
    },
    RECEBIMENTO_DE_DOAÇÃO_Assinatura_do_beneficiário_conforme_RG: {
        type: Boolean
    },
})

var Cadastro = mongoose.model('Cadastro', CadastroSchema);
module.exports = Cadastro;