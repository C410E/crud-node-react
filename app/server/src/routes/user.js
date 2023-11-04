const express = require("express");
const { getUsers } = require("../controllers/user");
const { postUsers } = require("../controllers/postUser");
const { deleteUser } = require("../controllers/deleteUser");
const { upDateUser } = require("../controllers/upDateUser");

const routes = express()

routes.get("/", getUsers)

routes.post("/", postUsers)

routes.delete("/:id", deleteUser)

routes.put("/:id", upDateUser)

module.exports = routes