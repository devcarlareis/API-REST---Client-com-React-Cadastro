const Router = require('express')
const CadastroController = require('../controller/cadastro-controller')
const {celebrate, Joi, Segments} = require('celebrate')

const cadastroRouter = Router()
const cadastroController = new CadastroController()

cadastroRouter.post('/cadastro',
celebrate({
  [Segments.BODY]: {
    NOME_DO_BENEFICIÁRIO: Joi.string().required(),
    RG: Joi.string().required(),
    NIS: Joi.string().required(),
    TELEFONE: Joi.string().required(),
    ENDEREÇO: Joi.string().required(),
    COMPOSIÇÃO_FAMILIAR: Joi.string().required(),
    TOTAL_FAMILIAR: Joi.string().required(),
    RECEBIMENTO_DE_DOAÇÃO_Assinatura_do_beneficiário_conforme_RG: Joi.boolean().required()
  },
}),
cadastroController.cadastrocontroler,
)
module.exports = cadastroRouter