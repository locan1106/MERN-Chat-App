import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL!); // ! = if (process.env.MONGODB_URL)
		console.log("Connected to MongoDB");
	} catch (error: any) {
		console.log("Error in connecting to MongoDB:", error.message);
	}
};

export default connectMongoDB;
