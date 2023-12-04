import express from "express";

const app = express();
const port = 3001;

import routes from "./routes.js";
import cors from "cors";
import "./config/dbConfig.js";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`Back inicializado e escutando a porta ${port}`);
});

export default app;
