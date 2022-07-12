const Router = require('express')
const CadastroController = require('../controller/cadastro-controller')
const {celebrate, Joi, Segments} = require('celebrate')

const cadastroRouter = Router()
const cadastroController = new CadastroController()

cadastroRouter.post('/cadastro',
celebrate({
  [Segments.BODY]: {
    NOME_DO_BENEFICIÁRIO: Joi.string().NOME_DO_BENEFICIÁRIO().required(),
    RG: Joi.string().RG().required(),
    NIS: Joi.string().NIS().required(),
    TELEFONE: Joi.string().TELEFONE().required(),
    ENDEREÇO: Joi.string().ENDEREÇO().required(),
    COMPOSIÇÃO_FAMILIAR: Joi.string().COMPOSIÇÃO_FAMILIAR().required(),
    TOTAL_FAMILIAR: Joi.string().TOTAL_FAMILIAR().required(),
    RECEBIMENTO_DE_DOAÇÃO_Assinatura_do_beneficiário_conforme_RG: Joi.string().RECEBIMENTO_DE_DOAÇÃO_Assinatura_do_beneficiário_conforme_RG().required(),
  },
}),
cadastroController.cadastrocontroler,
)