const https = require('https');

https.get('https://pimer.vercel.app/pimer.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const match = data.match(/from\(['"]([^'"]+)['"]\)/g);
    if (match) console.log(match);
  });
}).on('error', (err) => console.error(err));
