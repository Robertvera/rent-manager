const rentManagerApi = require('rent-manager-api-client')

rentManagerApi.protocol = process.env.REACT_APP_API_PROTOCOL
rentManagerApi.host = process.env.REACT_APP_API_HOST
rentManagerApi.port = process.env.REACT_APP_API_PORT


module.exports = rentManagerApi