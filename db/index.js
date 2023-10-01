import mongoose from "mongoose";
import "dotenv/config";

const uri = `mongodb+srv://houssem:${process.env.PASSWORD}@crudbase.nmh8wrm.mongodb.net/?retryWrites=true&w=majority`;

export default async function connectDB() {
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(uri)
      .then(() => console.log("db run successflly"))
      .catch((err) => console.log("error connecting db", err));
  } catch (error) {
    console.log("error connecting db", error);
  }
}
