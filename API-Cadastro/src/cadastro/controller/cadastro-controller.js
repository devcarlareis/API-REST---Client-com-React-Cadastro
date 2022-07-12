const {req, res} = require('express')
const CadastroService = require('../service/cadastro-service')

class CadastroController {
    async cadastrocontroler (req, res){
        var {NOME_DO_BENEFICIÁRIO,RG,NIS,TELEFONE,ENDEREÇO,COMPOSIÇÃO_FAMILIAR,TOTAL_FAMILIAR,RECEBIMENTO_DE_DOAÇÃO_Assinatura_do_beneficiário_conforme_RG} = req.body;

        const cadastroService = new CadastroService()
        const cadastrado = await cadastroService.cadastro(NOME_DO_BENEFICIÁRIO,RG,NIS,TELEFONE,ENDEREÇO,COMPOSIÇÃO_FAMILIAR,TOTAL_FAMILIAR,RECEBIMENTO_DE_DOAÇÃO_Assinatura_do_beneficiário_conforme_RG)
        return res.status(200).json(cadastrado);
    }
}

module.exports = CadastroController;