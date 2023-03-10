require('dotenv').config()

const jwt = require('jsonwebtoken')

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImFjY291bnQiOiJzaGluIiwiaWF0IjoxNjU4MzAxNzQ3fQ.Jm_-c9TsCUkVhnZ5ZxlCcT5JHGAywTXPp-6iXESP2R0'

jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
  if (error) {
    console.log({ error })
  }
  console.log(decoded)

})
