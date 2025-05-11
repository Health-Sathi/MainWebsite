import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

/**
 * The DEBUG flag will do two things:
 * 1. Show errors in the response if an error is thrown responding to a request
 * 2. Disable caching of assets while in development
 */
const DEBUG = false;

async function handleRequest(event) {
  try {
    // Get the static asset from KV
    let options = {};
    
    if (DEBUG) {
      options.cacheControl = { bypassCache: true };
    }
    
    return await getAssetFromKV(event, options);
  } catch (e) {
    // If an error occurs, serve a 404 page if available
    try {
      const notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
      });
      
      return new Response(notFoundResponse.body, { 
        ...notFoundResponse, 
        status: 404 
      });
    } catch (e) {
      return new Response('Page not found', { status: 404 });
    }
  }
}

export default {
  async fetch(request, env, ctx) {
    try {
      return await handleRequest({
        request,
        waitUntil: ctx.waitUntil.bind(ctx),
        env,
      });
    } catch (e) {
      if (DEBUG) {
        return new Response(e.message || e.toString(), { status: 500 });
      }
      return new Response('Internal Error', { status: 500 });
    }
  },
}; 