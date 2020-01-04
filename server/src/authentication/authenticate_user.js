'use strict'

const axios = require('axios')

const {
  AppError,
  config: { AUTH_SERVER }
} = require('../utils')

const authorization = async (usuario, senha, cliente) => {
  const server = `${AUTH_SERVER}/login`
  try {
    const response = await axios.post(server, {
      usuario,
      senha,
      cliente
    })

    if (!response || response.status !== 201 || !('data' in response)) {
      throw new Error()
    }

    return response.data.success || false
  } catch (e) {
    throw new AppError(
      'Erro ao se comunicar com o servidor de autenticação',
      null,
      e
    )
  }
}

module.exports = authorization
