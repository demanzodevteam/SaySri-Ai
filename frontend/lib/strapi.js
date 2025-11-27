// lib/strapi.js
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// export function strapiURL(path = "") {
//   const base = STRAPI_URL.replace(/\/$/, "");
//   const p = String(path).replace(/^\//, "");
//   return `${base}/${p}`;
// }

// export function serverHeaders() {
//   const headers = { "Content-Type": "application/json" };
//   if (process.env.STRAPI_API_TOKEN) {
//     headers["Authorization"] = `Bearer ${process.env.STRAPI_API_TOKEN}`;
//   }
//   return headers;
// }
