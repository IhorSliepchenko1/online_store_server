require(`dotenv`).config();
const express = require(`express`);
const sequilize = require(`./db.js`);
const models = require(`./models/models.js`);
const cors = require(`cors`);
const router = require(`./routes/index.js`);
const erroHandler = require(`./middleware/ErrorHandlingMiddleware.js`);

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(`/api`, router);
app.use(erroHandler);

const start = async () => {
  try {
    await sequilize.authenticate();
    await sequilize.sync();

    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
