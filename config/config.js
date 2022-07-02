import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB;

export default {
    mongodb:{
        URL: MONGODB_URI,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

    }
}