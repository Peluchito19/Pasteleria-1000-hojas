const https = require('https');

https.get('https://pasteleria-1000-hojas.vercel.app/assets/index-jlM9kLcI.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const match = data.match(/MutationObserver\([^)]+\)/);
    if (match) console.log(data.substring(match.index, match.index + 500));
  });
}).on('error', (err) => console.error(err));
