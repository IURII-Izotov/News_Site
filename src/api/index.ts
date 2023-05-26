export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://news-site-be6n.vercel.app/api"
    : "http://localhost:3001/api";
