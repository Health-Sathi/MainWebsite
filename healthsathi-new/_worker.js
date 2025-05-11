export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    try {
      // Serve static assets
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If the asset isn't found or there's an error, return a 404
      return new Response("Not Found", { status: 404 });
    }
  }
}; 