const model = require('../models/user');
/**
 * Obtener DATA de USUARIOS
 */

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
        res.send({
            docs
        })
    })
}
/**
 * Data Insert Users
 */
exports.insertData = (req, res) => {

}