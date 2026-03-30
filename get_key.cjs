const https = require('https');

https.get('https://pimer.vercel.app/pimer.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const match = data.match(/SUPABASE_ANON = scriptTag\.getAttribute\('data-pimer-key'\) \|\| '([^']+)'/);
    if (match) console.log(match[1]);
  });
}).on('error', (err) => console.error(err));
