import mongoose from 'mongoose';

export class Database{
    static connection = "mongodb://localhost:27017/vendor";
    static connect() {
        mongoose
        .connect(this.connection, { useNewUrlParser: true , useUnifiedTopology: true })
        .then(() => {
            return console.log(`Successfully connected to ${this.connection}`);
        })
        .catch(error => {
            console.log("Error connecting to database: ", error);
            return process.exit(1);
        });
    }
}