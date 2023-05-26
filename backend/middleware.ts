import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/(.*)",
};

const corsOrigin =
  process.env.NODE_ENV === "production"
    ? "https://news-site-rho.vercel.app"
    : "http://localhost:3000";
export function middleware(request: NextRequest) {
  console.log(request.headers);
  const response = NextResponse.next({ request: { headers: request.headers } });
  response.headers.set("Access-Control-Allow-Origin", corsOrigin);
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}
