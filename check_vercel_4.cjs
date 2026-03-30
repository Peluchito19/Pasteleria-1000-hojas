const https = require('https');

https.get('https://pasteleria-1000-hojas.vercel.app/assets/index-jlM9kLcI.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const index = data.indexOf('attributeFilter');
    if (index !== -1) console.log(data.substring(index - 200, index + 300));
    else console.log("Not found");
  });
}).on('error', (err) => console.error(err));
