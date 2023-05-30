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
  switch (request.method) {
    case "OPTIONS": {
      const response = new NextResponse();
      setHeaders(response.headers);
      return response;
    }
    default: {
      const response = NextResponse.next({ request: { headers: request.headers } });
      setHeaders(response.headers);
      return response;
    }
  }
}

function setHeaders(headers: Headers) {
  headers.set("Access-Control-Allow-Origin", corsOrigin);
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
}
