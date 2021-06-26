const { Mongoose } = require('mongoose');
const model = require('../models/user');
const options = {
    page:1,
    limit: 3
}

const parseId = id => mongoose.Types.objectId(id)
/**
 * Obtener DATA de USUARIOS
 */

exports.getData = (req, res) => {
    model.paginate({},options, (err, docs) => {
        res.send({
            docs
        })
    })
}
exports.getSingle = (req, res) => {

}
/**
 * Data Insert Users
 */
exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        (err) ? res.send({data: err},422) : res.send({data: docs})
    })
}

/**
 * Updated user
 */
exports.updatedSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({items: docs})
        }
    )
}

/**
 * Delected user
 */
 exports.delectedSingle = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({items: docs})
        }
    )
}