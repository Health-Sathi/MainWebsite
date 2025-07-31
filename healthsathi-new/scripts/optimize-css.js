const fs = require('fs');
const path = require('path');

// CSS optimization script
function optimizeCSS() {
  console.log('🔧 Optimizing CSS for better performance...');
  
  // Read the globals.css file
  const cssPath = path.join(__dirname, '../src/app/globals.css');
  let css = fs.readFileSync(cssPath, 'utf8');
  
  // Remove duplicate font-face declarations
  const fontFaceRegex = /@font-face\s*\{[^}]+\}/g;
  const fontFaces = css.match(fontFaceRegex) || [];
  const uniqueFontFaces = [...new Set(fontFaces)];
  
  // Remove all font-face declarations and add unique ones back
  css = css.replace(fontFaceRegex, '');
  css = uniqueFontFaces.join('\n\n') + '\n\n' + css;
  
  // Remove empty lines and excessive whitespace
  css = css.replace(/\n\s*\n\s*\n/g, '\n\n');
  css = css.replace(/\s+/g, ' ');
  css = css.replace(/;\s+/g, ';');
  css = css.replace(/\{\s+/g, '{');
  css = css.replace(/\s+\}/g, '}');
  
  // Write optimized CSS back
  fs.writeFileSync(cssPath, css);
  
  console.log('✅ CSS optimization completed!');
}

// Run optimization
if (require.main === module) {
  optimizeCSS();
}

module.exports = { optimizeCSS }; 