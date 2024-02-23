import express from "express";

import userRouter from "./routes/users.js";

const app = express();
app.use(express.json());
const PORT = 5000;

app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send("<h1>Namaste from Homepage!!!</h1>");
})

app.listen(PORT, () => console.log(`Server running on - 'http://localhost:${PORT}'`))