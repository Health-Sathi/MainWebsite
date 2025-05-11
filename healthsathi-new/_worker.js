export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // Debug information: return a list of all available keys if accessing /debug-assets
    if (pathname === '/debug-assets') {
      try {
        const keys = await env.ASSETS.list();
        return new Response(JSON.stringify({ 
          message: "Available assets",
          keys: keys 
        }, null, 2), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ 
          error: "Error listing assets",
          message: e.toString() 
        }, null, 2), {
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    
    // Paths to try, in order
    const pathsToTry = [
      pathname, // Original path
      pathname.endsWith('/') ? `${pathname}index.html` : pathname, // Add index.html to directory paths
      !pathname.includes('.') ? `${pathname}.html` : pathname, // Add .html extension if no extension
      !pathname.includes('.') && !pathname.endsWith('/') ? `${pathname}/index.html` : pathname, // Try directory index
      '/index.html' // Fall back to root index.html
    ];
    
    // Remove duplicates and empty paths
    const uniquePaths = [...new Set(pathsToTry.filter(p => p))];
    
    // Try each path in order
    for (const path of uniquePaths) {
      try {
        // For debugging purpose, you can see what paths are being tried
        console.log(`Trying path: ${path}`);
        
        // Try the static asset directly
        const response = await env.ASSETS.fetch(new Request(new URL(path, url.origin)));
        if (response.status === 200) {
          return response;
        }
      } catch (e) {
        // Continue to next path on error
        console.error(`Error fetching ${path}:`, e);
      }
    }
    
    // If nothing worked, try to serve 404.html
    try {
      const notFoundResponse = await env.ASSETS.fetch(new Request(new URL('/404.html', url.origin)));
      return new Response(notFoundResponse.body, { 
        status: 404,
        headers: { "Content-Type": "text/html;charset=UTF-8" }
      });
    } catch (e) {
      // Last resort: simple plain text 404
      return new Response(`Page Not Found - Tried paths: ${uniquePaths.join(', ')}`, { 
        status: 404,
        headers: { "Content-Type": "text/plain" }
      });
    }
  }
}; 