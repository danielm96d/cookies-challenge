import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 8080;

app.use(cookieParser())

app.get('/', (req, res)=> res.send('Welcome to the Homepage'));

app.get('/login', (req, res) =>{
  var cookie_options = {
    maxAge: 900000,
    httpOnly: true,
    sameSite: 'strict',
  }

  res.cookie('username', 'Daniel', cookie_options)
  res.send('Thank you for Logging in')
})

app.get('/hello', (req, res)=>{
  res.send(`Welcome ${req.cookies.username}`)
})

app.listen(port, ()=> console.log(`Cookie Challenge launched \n Server Listening on port: ${port}`))
