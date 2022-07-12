const Cadastro = require('../model/Cadastro-schema-model-mongodb')

class CadastroMesaBrasil {
    async cadastro (NOME_DO_BENEFICIÁRIO,RG,NIS,TELEFONE,ENDEREÇO,COMPOSIÇÃO_FAMILIAR,TOTAL_FAMILIAR,RECEBIMENTO_DE_DOAÇÃO_Assinatura_do_beneficiário_conforme_RG ){
        var user = await Cadastro.create({NOME_DO_BENEFICIÁRIO,RG,NIS,TELEFONE,ENDEREÇO,COMPOSIÇÃO_FAMILIAR,TOTAL_FAMILIAR,RECEBIMENTO_DE_DOAÇÃO_Assinatura_do_beneficiário_conforme_RG})
        return user;
    }
}

module.exports = CadastroMesaBrasil;