// lib/media.js
import { STRAPI_URL } from "./strapi";

export function getStrapiMedia(media) {
  if (!media) return null;

  // Strapi v4 shape: media.data?.attributes?.url
  const url =
    media?.data?.attributes?.url ||
    media?.attributes?.url ||
    media?.url ||
    null;

  if (!url) return null;
  if (url.startsWith("http")) return url;

  // relative url (e.g. /uploads/xxx.jpg) -> full
  return `${STRAPI_URL.replace(/\/$/, "")}${url}`;
}
