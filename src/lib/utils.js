const {default: mongoose} = require("mongoose");

const connection = {};

export const connectDB = async () => {
    try {
        if (connection.isConnected) {
            console.log('Usinge existing connection');
            return
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        console.log(error);
        throw new Error(error)
      }
}
