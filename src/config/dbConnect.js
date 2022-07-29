import mongoose from "mongoose";

mongoose.connect("mongodb+srv://edufacfito:123@alura.2ro8xx8.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;