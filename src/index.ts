import { Router } from "./api/routes";
const express = require("express");

const app = express();

const port = 80;

const router = new Router(app);

router.mapRoutes();

app.listen(port, () => {
  console.log(`started listening on ${port}`);
});
