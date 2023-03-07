import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use([userRoutes]);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor funfando na porta: ${port}`));
