import { Database } from "./core/database";
import { Router } from "./core/router";
import { Response } from "express";

const express = require('express');

const app = express();
const PORT = 8080;

const router = express.Router({
  strict: true
});

Database.connect();

app.use(express.json())

app.use(function (req: Request, res: Response, next: any) {
  console.log('Time:', Date.now())
  next()
});
//This line didn't work before writing app.user(functino(req: Request, res: Response, next:any){next});
//This cost me a day
Router.routeConfig(app);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});