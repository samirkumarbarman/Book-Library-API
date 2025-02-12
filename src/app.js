import express from "express";
import bookRoutes from "./routes/bookRoutes.js"
import authRoutes from "./routes/authRoutes.js";
import errorHandeler from "./middleware/errorHandeler.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandeler);

export default app;