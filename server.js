import express from 'express';
import helloController
    from "./controllers/hello-controller.js";
import userController   from "./controllers/users-controller.js";
import tuitController from "./controllers/tuits-controller.js";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitController(app);
app.listen(4000);