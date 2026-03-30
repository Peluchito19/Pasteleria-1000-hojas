const https = require('https');

https.get('https://pimer.vercel.app/api/data?site=pasteleria-1000-hojas', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
}).on('error', (err) => console.error(err));
