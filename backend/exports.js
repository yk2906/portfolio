var json_example = [{
    name: "testuser",
    email: "test@gmail.com",
    content: "test content"
    }]

exports.get_example = (res, req, next) => {
    res.json(json_example);
}