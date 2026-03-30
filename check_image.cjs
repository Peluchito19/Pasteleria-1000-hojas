const https = require('https');

https.get('https://pasteleria-1000-hojas.vercel.app/images/t-milhojas.jpg', (res) => {
  console.log("Status Code:", res.statusCode);
  console.log("Headers:", res.headers);
}).on('error', (err) => console.error(err));
