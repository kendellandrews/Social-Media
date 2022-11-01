require('dotenv').config()

const express = require('express')
const cors = require('cors')
const {PORT} = process.env 
const {getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts')
const {login, logout} = require('./controller/auth')
const {isAuthenticated} = require('./middleware/isAuthenticated')

const app = express()

app.listen(PORT , () => console.log(`db sync successful`))