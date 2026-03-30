const https = require('https');

https.get('https://pimer.vercel.app/pimer.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const lines = data.split('\n');
    lines.forEach((line, i) => {
      if (line.includes('opacity') || line.includes('visibility') || line.includes('display: none')) {
        console.log(`Line ${i}: ${line}`);
      }
    });
  });
}).on('error', (err) => console.error(err));
