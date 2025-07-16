const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// Missing icons that need to be downloaded
const missingIcons = ['Edit', 'Filter', 'CheckCircle', 'HelpCircle', 'BarChart3'];

// Icon name mapping for Lucide's actual file names
const iconNameMapping = {
  'Edit': 'edit-3',
  'Filter': 'filter',
  'CheckCircle': 'check-circle',
  'HelpCircle': 'help-circle',
  'BarChart3': 'bar-chart-3'
};

// Function to get the correct file name for an icon
function getIconFileName(iconName) {
  return iconNameMapping[iconName] || iconName.toLowerCase();
}

// Function to download an icon
function downloadIcon(iconName) {
  return new Promise((resolve, reject) => {
    const fileName = getIconFileName(iconName);
    const url = `https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/${fileName}.svg`;
    const filePath = path.join(__dirname, 'icons', `${iconName}.svg`);
    
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded ${iconName}.svg`);
          resolve();
        });
      } else {
        console.log(`✗ Failed to download ${iconName}.svg (Status: ${response.statusCode})`);
        resolve(); // Continue with other icons
      }
    }).on('error', (err) => {
      console.log(`✗ Error downloading ${iconName}.svg: ${err.message}`);
      resolve(); // Continue with other icons
    });
  });
}

// Function to convert SVG to PNG using sharp
async function convertSvgToPng(iconName) {
  try {
    const svgPath = path.join(__dirname, 'icons', `${iconName}.svg`);
    const pngPath = path.join(__dirname, 'icons', `${iconName}.png`);
    
    if (fs.existsSync(svgPath)) {
      // Read SVG file
      const svgBuffer = fs.readFileSync(svgPath);
      
      // Convert to PNG using sharp
      await sharp(svgBuffer)
        .resize(64, 64) // Set size to 64x64 pixels
        .png()
        .toFile(pngPath);
      
      console.log(`✓ Converted ${iconName}.svg to ${iconName}.png`);
    } else {
      console.log(`✗ SVG file not found for ${iconName}`);
    }
  } catch (error) {
    console.log(`✗ Error converting ${iconName}: ${error.message}`);
  }
}

// Main execution
async function main() {
  console.log('Downloading missing icons...\n');
  
  // Download missing icons
  for (const icon of missingIcons) {
    await downloadIcon(icon);
    // Add a small delay to be respectful to the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('\nDownload completed! Starting PNG conversion...\n');
  
  // Convert all downloaded SVGs to PNGs
  for (const icon of missingIcons) {
    await convertSvgToPng(icon);
  }
  
  console.log('\nConversion completed!');
}

main().catch(console.error); 