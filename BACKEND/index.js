import express from "express";
import dotenv from "dotenv";
import dbConnection from "./db/connection/db.connection.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import apiRoutes from "./routes/api.routes.js";
import staticRoutes from "./routes/static.routes.js";

dotenv.config();
const app = express();

app.listen(process.env.PORT, () =>
  console.log(`Server started at http://localhost:${process.env.PORT}`)
);
dbConnection();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "keys",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
app.use(cookieParser());

app.use("/", staticRoutes);
app.use("/api", apiRoutes);
