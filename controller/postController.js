const userDB = require("../model/post.json");

function createPost(req, res) {
    let post = req.body;
    userDB.push(post);
    fs.writeFileSync(path.join(__dirname,"post.json"),JSON.stringify(postDB));
    res.status(201).json({
        success: "successfull",
        post: post
    })
}

function getPost(req, res) {
    let { user_id } = req.params;
    let user;
    for (let i = 0; i < userDB.length; i++) {
        if (userDB[i].user_id == user_id) {
            user = userDB[i];
        }
    }
    if (user == undefined) {
        return res.status(404).json({
            status: "failure",
            message: "user not found"
        })
    }

    res.status(200).json({
        status: "success",
        user: user
    })
}

function updatePost(req, res) {
    let { user_id } = req.params;
    let user;
    let toUpdate = req.body;
    for (let i = 0; i < userDB.length; i++) {
        if (userDB[i].user_id == user_id) {
            user = userDB[i];
        }
    }

    if (user == undefined) {
        return res.status(404).json({
            status: "failure",
            message: "user not found"
        })
    }

    for (let key in toUpdate) {
        user[key] = toUpdate[key];
    }
    fs.writeFileSync(path.join(__dirname, "user.json"), JSON.stringify(userDB));
     
    res.status(200).json({
        status: "success",
        "message": "message"
    })

}

function deletePost(req, res) {
    let { user_id } = req.params;
    let initialUserL = userDB.length;
    userDB = userDB.filter(function (user) {
        return user.user_id != user_id;
    })
    if (initialUserL == userDB.length) {
        return res.status(404).json({
            status: "failure",
            message: "user not found"
        })
    }
    fs.writeFileSync(path.join(__dirname, "user.json"), JSON.stringify(userDB));

    res.status(200).json({
        status: "success",
        "message": "user deleted"
    })
}

module.exports.createPost = createPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;
module.exports.getPost = getPost;
