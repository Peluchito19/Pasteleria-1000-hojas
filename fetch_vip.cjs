const https = require('https');

const options = {
  hostname: 'gekdkjdisemdnemjqimj.supabase.co',
  path: '/rest/v1/vip_site_bindings?site_key=eq.pasteleria-1000-hojas&select=*',
  method: 'GET',
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdla2RramRpc2VtZG5lbWpxaW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1ODEyMDIsImV4cCI6MjA4ODE1NzIwMn0.1UBQ6bUFbHLuFmr_t5guFBLVqG0uQGWAC2y2_Jvl09Q',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdla2RramRpc2VtZG5lbWpxaW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1ODEyMDIsImV4cCI6MjA4ODE1NzIwMn0.1UBQ6bUFbHLuFmr_t5guFBLVqG0uQGWAC2y2_Jvl09Q'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
}).on('error', (err) => console.error(err));
