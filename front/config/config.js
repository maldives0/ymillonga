export const backUrl = process.env.NODE_ENV === 'production' ? "//15.165.249.3" : "http://localhost:3051";


export const callbackUrl = process.env.NODE_ENV === 'production' ? "//15.165.249.3/user/google/callback" : "//localhost:3051/user/google/callback";
// export const callbackUrl = process.env.NODE_ENV === 'production' ? "//api.ymillonga.com/user/google/callback" : "http://localhost:3051/user/google/callback";
// export const backUrl = process.env.NODE_ENV === 'production' ? "//api.ymillonga.com" : "http://localhost:3051";
// export const backUrl = "http://localhost:3051";


export const frontUrl = process.env.NODE_ENV === 'production' ? "//ymillonga.com" : "http://localhost:3050";