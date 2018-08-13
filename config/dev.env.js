'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const protocol = process.env.https_enabled == 1 ? 'https': 'http'

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: JSON.stringify(process.env.API_ROOT) || `"${protocol}://localhost:10000"`,
  ONLYOFFICE_PROXY: JSON.stringify(process.env.ONLYOFFICE_PROXY) || `"${protocol}://localhost:10000/office/iframe"`,
  CHAT_ROOT: '',
})
