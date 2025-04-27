import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import connectDB from "./db/db.js"
import path from "path"

// const authRoutes = require('./routes/authRoutes');
import authRoutes from "./routes/authRoutes.js"
// const taskRoutes = require('./routes/taskRoutes');
import taskRoutes from "./routes/taskRoutes.js"


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
