import type { APIRoute } from 'astro';
import { type FlarebaseConfig, FlarebaseAuth } from "@marplex/flarebase-auth";

export const prerender = false;

const authConfig: FlarebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  privateKey: import.meta.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  serviceAccountEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
};
const serverAuth = new FlarebaseAuth(authConfig);

export const GET: APIRoute = async () => {
  console.log(serverAuth);
  return new Response("ok", { status: 200 });
};
