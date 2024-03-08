import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { ratRouter } from "./ratRoutes.js";

const app = express();
const port = 4001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());

app.use("/", ratRouter);

/*app.get("/", (req, res) => {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});*/

/*app.post("/", (req, res) => {
  console.log("we posted, here is, req");
  console.log(req.body);
  res.json({ msg: "Posted!" });
});*/

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("It is broken...");
});

app.use((req, res) => {
  res.status(404).send("404 error here.");
});

app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
