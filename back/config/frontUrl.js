const prod = process.env.NODE_ENV === 'production';
const frontUrl = prod ? "http://ymillonga.xyz" : "http://localhost:3050";
module.exports = frontUrl;