import dotenv from "dotenv";
import connectDb from "./src/config/db.js"
import app from "./src/app.js"

dotenv.config();

const port = process.env.PORT || 5000;

connectDb();

app.listen(port, () => {
    console.log(`Server is listening at Port:${port}`);
});