const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// All icons used in the project (extracted from the codebase)
// Updated with correct Lucide icon names
const icons = [
  // Navigation and UI
  'Menu', 'X', 'ArrowRight', 'ChevronLeft', 'ChevronRight',
  
  // User and Social
  'User', 'Users', 'Users2',
  
  // Gaming and Achievement
  'Trophy', 'Medal', 'Crown', 'Target', 'Flag', 'Star',
  
  // Actions and Tools
  'Edit', 'Trash2', 'Upload', 'Search', 'Filter', 'Settings',
  'Check', 'CheckCircle', 'HelpCircle', 'RefreshCw',
  
  // Notifications and Status
  'Bell', 'Activity', 'Clock', 'Calendar',
  
  // Content and Media
  'Image', 'BookOpen', 'ClipboardCheck', 'ClipboardList',
  
  // Business and Finance
  'DollarSign', 'Tag', 'BarChart3', 'TrendingUp',
  
  // Objects and Items
  'Gift', 'Box', 'Package', 'Ticket', 'Layers',
  
  // Nature and Elements
  'Flame', 'Zap', 'Shield',
  
  // Social Media
  'Twitter', 'Linkedin', 'Instagram',
  
  // Industry Specific
  'Code', 'Building2', 'Plane', 'Gamepad2', 'Vote', 'Globe', 'Heart', 'Mail',
  
  // Additional UI
  'Palette', 'Play'
];

// Icon name mapping for Lucide's actual file names
const iconNameMapping = {
  'ArrowRight': 'arrow-right',
  'ChevronLeft': 'chevron-left', 
  'ChevronRight': 'chevron-right',
  'Users2': 'users',
  'Trash2': 'trash-2',
  'CheckCircle': 'check-circle',
  'HelpCircle': 'help-circle',
  'RefreshCw': 'refresh-cw',
  'BookOpen': 'book-open',
  'ClipboardCheck': 'clipboard-check',
  'ClipboardList': 'clipboard-list',
  'DollarSign': 'dollar-sign',
  'BarChart3': 'bar-chart-3',
  'TrendingUp': 'trending-up',
  'Building2': 'building-2',
  'Gamepad2': 'gamepad-2',
  'Edit': 'edit-3',
  'Filter': 'filter'
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
  console.log('Starting icon download and conversion...\n');
  
  // Download all icons
  for (const icon of icons) {
    await downloadIcon(icon);
    // Add a small delay to be respectful to the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('\nDownload completed! Starting PNG conversion...\n');
  
  // Convert all downloaded SVGs to PNGs
  for (const icon of icons) {
    await convertSvgToPng(icon);
  }
  
  console.log('\nConversion completed!');
  
  // Create a summary file
  const summary = {
    totalIcons: icons.length,
    icons: icons,
    downloadDate: new Date().toISOString(),
    note: 'SVG files downloaded and converted to PNG (64x64px)',
    formats: ['SVG', 'PNG']
  };
  
  fs.writeFileSync(
    path.join(__dirname, 'icons', 'icon-summary.json'),
    JSON.stringify(summary, null, 2)
  );
  
  console.log('\nIcon summary saved to icons/icon-summary.json');
  console.log('\nAll icons are now available in both SVG and PNG formats in the icons/ directory');
}

main().catch(console.error); 