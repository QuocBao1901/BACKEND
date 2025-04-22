import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1:27017/";
const dbName = "back_end";
export default async function mongoConnect() {
  try {
    mongoose.connect(`${uri}${dbName}`);
    console.log("Connect to mongo successfully");
  } catch (error) {
    console.log(error);
    console.log("Connect to mongo failex");
  }
}
