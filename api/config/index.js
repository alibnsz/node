module.exports = {
    "PORT": process.env.PORT || 3000,
    "LOG_LEVEL": process.env.LOG_LEVEL || "info",
    "CONNECTION_STRING": process.env.CONNECTION_STRING || "mongodb://localhost:27017/node",
};
