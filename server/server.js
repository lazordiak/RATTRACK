import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { ratRouter } from "./ratRoutes.js";

const app = express();
const port = 10000 || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());

app.use("/", express.static("dist"));

app.use("/rats", ratRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("It is broken...");
  next();
});

app.use((req, res) => {
  res.status(404).send("404 error here.");
});

app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
