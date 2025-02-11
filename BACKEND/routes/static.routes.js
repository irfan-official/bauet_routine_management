import express from "express";
import {
  staticDefault,
  server,
  notFound,
} from "../controllers/static.controller.js";

const Router = express.Router();
export default Router;

Router.get("/", staticDefault);

Router.get("/server", server);
Router.get("/404", notFound);
