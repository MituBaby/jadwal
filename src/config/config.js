import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connect to mongodb successfully');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
