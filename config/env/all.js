// default app configuration
const port = process.env.PORT || 4000;
//let db = process.env.MONGODB_URI || "mongodb://localhost:27017/nodegoat";
let db = "mongodb://root:oVsGh3X4hAa8RNw@mongodb.portasecura.com:27019/nodegoat?&authSource=admin&retryWrites=true&w=majority"

module.exports = {
    port,
    db,
    cookieSecret: "session_cookie_secret_key_here",
    cryptoKey: "a_secure_key_for_crypto_here",
    cryptoAlgo: "aes256",
    hostName: "localhost",
    environmentalScripts: []
};

