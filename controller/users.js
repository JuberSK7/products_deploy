
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.getAllUsers = (req, res) => {
    res.json(users);
  }
  
exports.getUser = (req, res) => {
    const id = +req.params.id;
    console.log(id);
    const user = users.find((p) => p.id === id);
    res.json(user);
  };
 exports.postUser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(200).json(req.body);
  };
  exports.putUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex((p) => p.id === id);
    users.splice(userIndex, 1, { ...req.body });
    res.status(201).json();
  };
  exports.patchUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex((p) => p.id === id);
    const user = users[userIndex];
    user.splice(userIndex, 1, { ...user, ...req.body });
    res.status(201).json();
  };
  exports.deleteUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex((p) => p.id === id);
    const user = users[userIndex];
    userIndex.splice(user, 1);
    res.status(201).json(user);
  };