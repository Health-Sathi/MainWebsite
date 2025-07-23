const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if ImageMagick is installed
function checkImageMagick() {
  try {
    execSync('convert --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.log('ImageMagick not found. Please install it to optimize images.');
    return false;
  }
}

// Optimize images in a directory
function optimizeImages(directory) {
  if (!checkImageMagick()) {
    return;
  }

  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      optimizeImages(filePath);
    } else if (isImageFile(file)) {
      optimizeImage(filePath);
    }
  });
}

function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const name = path.basename(filePath, ext);
  
  // Create WebP version
  const webpPath = path.join(dir, `${name}.webp`);
  
  try {
    if (ext === '.png') {
      execSync(`convert "${filePath}" -quality 85 "${webpPath}"`, { stdio: 'ignore' });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      execSync(`convert "${filePath}" -quality 85 -define webp:lossless=false "${webpPath}"`, { stdio: 'ignore' });
    }
    
    console.log(`Optimized: ${filePath} -> ${webpPath}`);
  } catch (error) {
    console.error(`Failed to optimize ${filePath}:`, error.message);
  }
}

// Run optimization
const publicDir = path.join(__dirname, '..', 'public');
console.log('Starting image optimization...');
optimizeImages(publicDir);
console.log('Image optimization complete!'); 