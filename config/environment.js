const os = require('os');

const environment = (process.env.NODE_ENV || 'production').trim();
const isProduction = environment === 'production';
const isDevelopment = !(isProduction);

module.exports = {
    hostName: os.hostname(),
    environment,
    isProduction,
    isDevelopment
};
