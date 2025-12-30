import dotenv from "dotenv";
import { app } from "./server";
import { checkDbConnection } from "./config/db.health";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
checkDbConnection();
