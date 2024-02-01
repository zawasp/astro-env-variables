import type { APIRoute } from 'astro';

const apiKey = import.meta.env.API_KEY;
console.log(apiKey);
export const GET: APIRoute = async () => {
  const anotherApiKey = import.meta.env.API_KEY;
  console.log(anotherApiKey);
  console.log(apiKey);
  return new Response(`${apiKey} ${anotherApiKey}`, { status: 200 });
};
