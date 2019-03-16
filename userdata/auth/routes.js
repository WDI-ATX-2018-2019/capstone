const UserDetails = require("./schema")
const express = require("express")
const router = express.Router()
const passport = require("passport")
const passportService = require("./strategies")

router.get("/", (request, response) => {
  UserDetails.find(null)
  .select({password: 1, salt : 1, username : 1})
  .then((data) => {
    console.log(data)
    response.send(data)
  })
})

router.post("/create", (request, response) => {
  let { username, password } = request.body
  let newUser = new UserDetails({
    username: username,
    password: password,
    created_at: new Date()
  })
  newUser
    .save()
    .then((result) => {
     response.send(result)
    })
    .catch((error) => {
      console.log(error)
      response.send(error)
    })
})


router.post("/", passport.authenticate("local"), (request, response) => {
  console.log('Authentication server hit.')
  console.log(request.body)
  response.send('AUTHENTICATED')
})

router.get("/nope", (request, response) => {
  console.log("Server was hit by the client.")
  response.send("Success.")
})

module.exports = router