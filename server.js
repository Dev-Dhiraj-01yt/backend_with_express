import app from "./src/app/ app.js"
import db_connection from "./src/Database/db_connect.js"

const mongo_db_uri = `mongodb+srv://I_am_CodingKnock:codingknock_here@firsttry.i9uelwy.mongodb.net/harry?appName=FirstTry`

//connecting database

db_connection(mongo_db_uri)

app.listen(3000, () => {
	console.log(`App listening on port ${3000}`)
})
