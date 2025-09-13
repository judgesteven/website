#!/usr/bin/env node

/**
 * GameLayer SEO Monitoring Script
 * Checks for common indexing and technical SEO issues
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://gamelayer.io';
const PAGES_TO_CHECK = [
  '/',
  '/pricing',
  '/api',
  '/references',
  '/chat',
  '/dashboard'
];

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkPage(url) {
  return new Promise((resolve, reject) => {
    const fullUrl = `${SITE_URL}${url}`;
    
    https.get(fullUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const issues = [];
        
        // Check for common SEO issues
        if (!data.includes('<title>')) {
          issues.push('Missing title tag');
        }
        
        if (!data.includes('meta name="description"')) {
          issues.push('Missing meta description');
        }
        
        if (!data.includes('canonical')) {
          issues.push('Missing canonical URL');
        }
        
        if (!data.includes('viewport')) {
          issues.push('Missing viewport meta tag');
        }
        
        if (!data.includes('robots')) {
          issues.push('Missing robots meta tag');
        }
        
        if (data.includes('localhost') || data.includes('127.0.0.1')) {
          issues.push('Contains localhost references');
        }
        
        if (data.includes('http://') && !data.includes('https://')) {
          issues.push('Contains HTTP references (should be HTTPS)');
        }
        
        resolve({
          url: fullUrl,
          status: res.statusCode,
          issues: issues,
          size: data.length
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function checkSitemap() {
  return new Promise((resolve, reject) => {
    const sitemapUrl = `${SITE_URL}/sitemap.xml`;
    
    https.get(sitemapUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const issues = [];
        
        if (res.statusCode !== 200) {
          issues.push(`Sitemap returns status ${res.statusCode}`);
        }
        
        if (!data.includes('<?xml')) {
          issues.push('Sitemap is not valid XML');
        }
        
        if (!data.includes('<urlset')) {
          issues.push('Sitemap missing urlset element');
        }
        
        // Count URLs in sitemap
        const urlCount = (data.match(/<loc>/g) || []).length;
        
        resolve({
          url: sitemapUrl,
          status: res.statusCode,
          issues: issues,
          urlCount: urlCount
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function checkRobotsTxt() {
  return new Promise((resolve, reject) => {
    const robotsUrl = `${SITE_URL}/robots.txt`;
    
    https.get(robotsUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const issues = [];
        
        if (res.statusCode !== 200) {
          issues.push(`Robots.txt returns status ${res.statusCode}`);
        }
        
        if (!data.includes('User-agent:')) {
          issues.push('Robots.txt missing User-agent directive');
        }
        
        if (!data.includes('Sitemap:')) {
          issues.push('Robots.txt missing Sitemap directive');
        }
        
        if (!data.includes('Allow:')) {
          issues.push('Robots.txt missing Allow directive');
        }
        
        resolve({
          url: robotsUrl,
          status: res.statusCode,
          issues: issues
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function runSEOCheck() {
  log('🔍 GameLayer SEO Monitoring Check', 'bold');
  log('=====================================', 'blue');
  
  const results = {
    pages: [],
    sitemap: null,
    robots: null,
    summary: {
      totalIssues: 0,
      criticalIssues: 0
    }
  };
  
  // Check main pages
  log('\n📄 Checking Main Pages...', 'blue');
  for (const page of PAGES_TO_CHECK) {
    try {
      const result = await checkPage(page);
      results.pages.push(result);
      
      if (result.issues.length > 0) {
        log(`❌ ${page}: ${result.issues.length} issues`, 'red');
        result.issues.forEach(issue => {
          log(`   - ${issue}`, 'yellow');
          results.summary.totalIssues++;
        });
      } else {
        log(`✅ ${page}: No issues found`, 'green');
      }
    } catch (error) {
      log(`❌ ${page}: Error - ${error.message}`, 'red');
      results.summary.criticalIssues++;
    }
  }
  
  // Check sitemap
  log('\n🗺️ Checking Sitemap...', 'blue');
  try {
    const sitemapResult = await checkSitemap();
    results.sitemap = sitemapResult;
    
    if (sitemapResult.issues.length > 0) {
      log(`❌ Sitemap: ${sitemapResult.issues.length} issues`, 'red');
      sitemapResult.issues.forEach(issue => {
        log(`   - ${issue}`, 'yellow');
        results.summary.totalIssues++;
      });
    } else {
      log(`✅ Sitemap: OK (${sitemapResult.urlCount} URLs)`, 'green');
    }
  } catch (error) {
    log(`❌ Sitemap: Error - ${error.message}`, 'red');
    results.summary.criticalIssues++;
  }
  
  // Check robots.txt
  log('\n🤖 Checking Robots.txt...', 'blue');
  try {
    const robotsResult = await checkRobotsTxt();
    results.robots = robotsResult;
    
    if (robotsResult.issues.length > 0) {
      log(`❌ Robots.txt: ${robotsResult.issues.length} issues`, 'red');
      robotsResult.issues.forEach(issue => {
        log(`   - ${issue}`, 'yellow');
        results.summary.totalIssues++;
      });
    } else {
      log(`✅ Robots.txt: OK`, 'green');
    }
  } catch (error) {
    log(`❌ Robots.txt: Error - ${error.message}`, 'red');
    results.summary.criticalIssues++;
  }
  
  // Summary
  log('\n📊 Summary', 'bold');
  log('==========', 'blue');
  log(`Total Issues Found: ${results.summary.totalIssues}`, 'yellow');
  log(`Critical Issues: ${results.summary.criticalIssues}`, 'red');
  
  if (results.summary.totalIssues === 0) {
    log('\n🎉 All checks passed! Your SEO setup looks good.', 'green');
  } else {
    log('\n⚠️ Issues found. Review the details above and fix them.', 'yellow');
  }
  
  // Save results to file
  const reportFile = path.join(__dirname, 'seo-monitor-report.json');
  fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
  log(`\n📄 Detailed report saved to: ${reportFile}`, 'blue');
  
  return results;
}

// Run the check
if (require.main === module) {
  runSEOCheck().catch(console.error);
}

module.exports = { runSEOCheck };
