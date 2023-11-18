import mongoose from "mongoose";

const Connection = async () => {
  const URL = "mongodb+srv://hamid22:Lxz2ihRav6TSEA6z@cluster1.gzucmuu.mongodb.net/?retryWrites=true&w=majority"
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error", error);
  }
}

export default Connection;
