/**
 * Created by hellocob on 17-3-27.
 */
const api = require('../api/index');
const http = require('http');

const port = defaultPort(process.env.PORT || '8081');
api.set('port', port);

/**
 * 创建http 服务.
 */

const server = http.createServer(api);

server.listen(port);
server.on('listening', onListening);
server.on('error', onErr);

function defaultPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;

}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('API listening on ' + bind);
}

function onErr(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

