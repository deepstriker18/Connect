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

const getById = function (id) {
    // get user in db
    return new Promise(function (resolve, reject) {
        db.query(`SELECT * from user WHERE uid="${id}"`, function (err, result) {
            if (err){
                reject(err);
            }else{
                resolve(result[0])
            }
        })
    })
}

const getAll = function (id) {
    return new Promise(function (resolve, reject) {
        db.query(`SELECT * from user`, function (err, result) {
            if (err){

                reject(err);
            }else{
                resolve(result)
            }
        })
    })
}

const updateById = function (uid, updateObj) {
    // update 
}

const deleteById = function (id) {
    // delete  user in db
}

module.exports.create = create
module.exports.getById = getById
module.exports.getAll = getAll
module.exports.updateById = updateById
module.exports.deleteById = deleteById