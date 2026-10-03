import mongoose from "mongoose";
const db_connection = async(mongo_db_uri) => {
    try {
        const { connection } = await mongoose.connect(mongo_db_uri)
        console.log(`db connected succesfully on ${mongo_db_uri}`)
    } catch (error) {
        console.log(`something went wrong ${error}`)
    }
}

export default db_connection;
