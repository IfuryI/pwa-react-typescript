//This config file fixes CRA path alias problem

const path = require('path')

module.exports = {
  webpack: {
    alias: {
      'api-services': path.resolve(__dirname, 'src/api/api-services'),
      'mapping-services': path.resolve(__dirname, './src/api/mapping-services')
    }
  }
}
