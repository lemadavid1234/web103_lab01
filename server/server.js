import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from lab_01 server');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
