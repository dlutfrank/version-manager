const path = require('path');
const baseLogPath = process.env.LOG_PATH || path.resolve(__dirname, '../../../logs');
const httpLogName = baseLogPath + "/http.log";
const serverLogName = baseLogPath + "/server.log";
const errorLogName = baseLogPath + "/error.log";
const isDev = process.env.SERVER_ENV !== 'production';

// module.exports = {
//     appenders: [
//         {
//             "category": "http",
//             "type": "dateFile",
//             "filename": httpLogName,
//             "alwaysIncludePattern": true
//         },
//         {
//             "category": "server",
//             "type": "dateFile",
//             "filename": serverLogName,
//             "alwaysIncludePattern": true
//         },
//         {
//             "type": "logLevelFilter",
//             "level": "ERROR",
//             "appender": {
//                 "type": "dateFile",
//                 "filename": errorLogName,
//                 "alwaysIncludePattern": true
//             }
//         }
//     ],
//     "levels": {
//         "http": isDev ? "DEBUG" : "INFO",
//         "server": isDev ? "DEBUG" : "INFO"
//     },
//     replaceConsole: process.env.NODE_ENV === 'production'
// };
//
module.exports = {
    appenders: {
        http: {
            type: "dateFile",
            filename: httpLogName,
            alwaysIncludePattern: true,
            pattern: "-yyyy-MM-dd"
        },
        server: {
            type: "dateFile",
            filename: serverLogName,
            alwaysIncludePattern: true,
            pattern: "-yyyy-MM-dd"
        },
        emergencies: {
            type: "file",
            filename: errorLogName,
            maxLogSize: 10485760,
            numBackups: 5
        },
        error: {
            type: "logLevelFilter",
            appender: "emergencies",
            level: "ERROR",
        }
    },
    categories: {
        default: {appenders: ["server", "error"], level: "ALL"},
        http: {appenders: ["http", "error"], level: "ALL"},
    },
    // pm2: true,
    // pm2InstanceVar: "INSTANCE_ID"
};
