const mongoose = require('mongoose');

let instance = null;
class Database {
  constructor() {
    if (!instance) {
      this.mongoconnection = null;
      instance = this;
    }
    return instance;
  }   
  
  async connect(options) {
    try {
      console.log("Connecting to database...");
      let db = await mongoose.connect(options.CONNECTION_STRING, {
        serverSelectionTimeoutMS: 5000,
        retryWrites: true,
        retryReads: true
      });

      this.mongoconnection = db;
      console.log("Database connected");
    } catch (err) {
      console.error("Database connection error:", err);
      process.exit(1);
    }
  }
}

module.exports = Database;
