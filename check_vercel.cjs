const https = require('https');

https.get('https://pasteleria-1000-hojas.vercel.app/assets/index-jlM9kLcI.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log("Contains data-original-src:", data.includes('data-original-src'));
    console.log("Contains MutationObserver:", data.includes('MutationObserver'));
    console.log("Contains data-fallback-applied:", data.includes('data-fallback-applied'));
  });
}).on('error', (err) => console.error(err));
