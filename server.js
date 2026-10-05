import app from "./src/app.js"
import db_connection from "./src/Database/db_connect.js"
import dotenv from "dotenv";
dotenv.config();

const mongo_db_uri = process.env.MONGODB_URI;
if (!mongo_db_uri) {
	  console.error("MONGODB_URI is not defined in the environment variables.");
	  process.exit(1);
}
//connecting database
db_connection(mongo_db_uri)

app.listen(process.env.PORT, () => {
	console.log(`App listening on port ${3000}`)
})
