const db = require("./connection");
const { v4: uuidv4 } = require('uuid');

const create = function (userobj) {
    userobj.uid = uuidv4();
    return new Promise(function (resolve, reject) {
        db.query('INSERT INTO user SET ?', userobj, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(userobj);
            }
        });
    })

}

const getById = function (id, selectionobj) {
    // get user in db
}

const updateById = function (uid, updateObj) {
    // update 
}

const deleteById = function (id) {
    // delete  user in db
}

module.exports.create = create
module.exports.getById = getById
module.exports.updateById = updateById
module.exports.deleteById = deleteById