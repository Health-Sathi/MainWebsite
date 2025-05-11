export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;
    
    // Handle root path
    if (path === '/') {
      path = '/index.html';
    } 
    // Handle paths that don't end with .html, .css, .js, etc.
    else if (!path.includes('.')) {
      path = `${path}.html`;
      if (path.endsWith('/.html')) {
        path = `${path.slice(0, -6)}/index.html`;
      }
    }
    
    // Create a new request with the modified path
    const newRequest = new Request(new URL(path, url.origin), request);
    
    try {
      // Attempt to serve static assets from KV
      const response = await env.ASSETS.fetch(newRequest);
      
      // Add security headers
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('X-Frame-Options', 'DENY');
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
      response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
      
      return response;
    } catch (e) {
      // If the asset isn't found or there's an error, attempt to serve the 404 page
      try {
        const notFoundResponse = await env.ASSETS.fetch(new Request(`${url.origin}/404.html`, request));
        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 });
      } catch (e2) {
        // If even the 404 page is not found, return a simple 404
        return new Response("Not Found", { status: 404 });
      }
    }
  }
}; 