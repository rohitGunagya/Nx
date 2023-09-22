import express from 'express';
import cors from "cors"
const app = express();


app.use(
  cors({
    origin:"*"
  })
)
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to my-express-api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
