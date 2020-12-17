export const backUrl = process.env.NODE_ENV === 'production' ? "http://api.ymillonga.com" : "http://localhost:3051";
// export const backUrl = "http://localhost:3051";

export const frontUrl = process.env.NODE_ENV === 'production' ? "https://ymillonga.com" : "http://localhost:3050";
export const callbackUrl = process.env.NODE_ENV === 'production' ? "http://api.ymillonga.com/user/google/callback" : "http://localhost:3051/user/google/callback";


