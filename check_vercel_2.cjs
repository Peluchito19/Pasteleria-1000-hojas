const https = require('https');

https.get('https://pasteleria-1000-hojas.vercel.app/assets/index-jlM9kLcI.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log("Contains new URL:", data.includes('new URL'));
  });
}).on('error', (err) => console.error(err));
