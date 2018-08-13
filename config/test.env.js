'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')
const protocol = process.env.https_enabled == 1 ? 'https': 'http'

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_ROOT: JSON.stringify(process.env.API_ROOT) || `"${protocol}://api.test.romvo.io"`,
  ONLYOFFICE_PROXY: JSON.stringify(process.env.ONLYOFFICE_PROXY) || `"${protocol}://api.test.romvo.io/office/iframe"`,
  CHAT_ROOT: '',
})
