import express from 'express';
import cors from 'cors';

const app = express()
const port = process.env.port

app.get('/send', () => {

})



app.listen(port, () => {
  console.log(`Server listening at ${port}`);
})