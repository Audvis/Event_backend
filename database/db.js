const { Sequelize } = require('sequelize');
const { database } = require('../config');


//DB LOCAL
//Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize(
//     database.database,
//     database.username,
//     database.password, {
//         host: database.host,
//         dialect: 'postgres',
//         logging: false
//     },
// );

//DB DEPLOYADA
const sequelize = new Sequelize('postgres://uucdiqpx:MDbIjHf8Wtl531WGAGcVT4_kJyZcFfBF@fanny.db.elephantsql.com/uucdiqpx', {
    // Hace que no muestre todos los mensajes de conexion con SQL en la consola cuando inicias el servidor.
    logging: false
})
module.exports = sequelize;