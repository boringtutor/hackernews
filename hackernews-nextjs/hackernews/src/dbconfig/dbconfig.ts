import mongoose from "mongoose"

export async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL!)
    const connection = mongoose.connection

    connection.on("connected", () => {
      console.log("connection succesfully established to mongodb")
    })
    connection.on("error", (err) => {
      console.log("connection to mongodb failed" + err)
      process.exit(1)
    })
  } catch (err) {
    console.log(err)
    // throw new Error(err);
  }
}
