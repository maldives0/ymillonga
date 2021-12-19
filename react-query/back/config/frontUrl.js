const prod = process.env.NODE_ENV === "production";
const frontUrl = prod ? "https://ymillonga.xyz" : "http://localhost:3052";
module.exports = frontUrl;
