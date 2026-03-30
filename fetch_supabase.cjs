const https = require('https');

https.get('https://gekdkjdisemdnemjqimj.supabase.co/rest/v1/pimer_data?site_key=eq.pasteleria-1000-hojas&select=*', {
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsI' // Wait, I don't have the full key.
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
}).on('error', (err) => console.error(err));
