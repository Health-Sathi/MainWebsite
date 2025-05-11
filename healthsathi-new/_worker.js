export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;
    
    // Add trailing slash to paths without extensions or trailing slashes
    if (!pathname.includes('.') && !pathname.endsWith('/')) {
      pathname = `${pathname}/`;
      return Response.redirect(`${url.origin}${pathname}`, 301);
    }
    
    try {
      // Handle the root path
      if (pathname === '/' || pathname === '') {
        return await env.ASSETS.fetch(`${url.origin}/index.html`);
      }
      
      // Handle paths ending with trailing slash - try to serve index.html
      if (pathname.endsWith('/')) {
        return await env.ASSETS.fetch(`${url.origin}${pathname}index.html`);
      }
      
      // Try to serve the exact asset
      return await env.ASSETS.fetch(request);
    } catch (e) {
      console.error("Error serving asset:", e);
      
      // Try to serve the path with .html extension if no extension is present
      if (!pathname.includes('.')) {
        try {
          return await env.ASSETS.fetch(`${url.origin}${pathname}.html`);
        } catch (e) {
          // If that fails, continue to other fallbacks
        }
      }
      
      // Try to serve index.html for the path
      try {
        if (!pathname.endsWith('/')) {
          return await env.ASSETS.fetch(`${url.origin}${pathname}/index.html`);
        }
      } catch (e) {
        // If that fails, continue to 404
      }
      
      // Serve 404.html as the final fallback
      try {
        const notFoundResponse = await env.ASSETS.fetch(`${url.origin}/404.html`);
        return new Response(notFoundResponse.body, { 
          ...notFoundResponse, 
          status: 404,
          headers: {
            ...notFoundResponse.headers,
            "Content-Type": "text/html;charset=UTF-8"
          }
        });
      } catch (e) {
        // If even the 404 page can't be found, return a simple 404
        return new Response("Page Not Found", { 
          status: 404,
          headers: { "Content-Type": "text/plain" }
        });
      }
    }
  }
}; 