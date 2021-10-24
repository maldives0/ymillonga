// export const backUrl = "http://localhost:3051";
// export const backUrl = process.env.NODE_ENV === 'production' ? "http://54.180.73.165" : "http://localhost:3051";
// export const callbackUrl = process.env.NODE_ENV === 'production' ? "http://54.180.73.165/user/google/callback" : "//localhost:3051/user/google/callback";


export const callbackUrl = process.env.NODE_ENV === 'production' ? "https://api.ymillonga.xyz/user/google/callback" : "http://localhost:3051/user/google/callback";
export const backUrl = process.env.NODE_ENV === 'production' ? "https://api.ymillonga.xyz" : "http://localhost:3051";
export const frontUrl = process.env.NODE_ENV === 'production' ? "https://ymillonga.xyz" : "http://localhost:3050";