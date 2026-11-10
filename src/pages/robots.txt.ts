import type { APIRoute } from 'astro';
import { isProduction, siteUrl, url } from '../site';

export const GET: APIRoute = () => {
  const body = isProduction
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL(url('sitemap.xml'), siteUrl).href}\n`
    : `# Staging/Vorschau – nicht indexieren\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
