export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve static assets from KV or R2
    if (url.pathname.startsWith('/static/')) {
      // This would point to your static assets in Cloudflare R2 or KV
      return env.ASSETS.fetch(request);
    }
    
    // Default handling for other routes
    return env.ASSETS.fetch(request);
  }
}; 