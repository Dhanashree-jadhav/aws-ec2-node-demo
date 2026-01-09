const express = require('express');                      # ➡️ Imports the Express library ➡️ require is used to include external modules in Node.js.
const app = express();                                   #  ➡️ Creates an Express application ➡️ app is now your web server.

const PORT = process.env.PORT || 3000;                    # ➡️ Defines the port number First checks if AWS provides a port (process.env.PORT) If not, uses 3000 📌 This makes the app cloud-compatible.

app.get('/', (req, res) => {
  res.send('🚀 Hello from AWS EC2!');                      # ➡️ Creates a GET API route / → home page ,req → request from user ,res → response from server
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });                          # ➡️ Health check endpoint ➡️ Used to check if server is running correctly 
                                                            # 📌 Useful in:Monitoring, Load balancers, DevOps setups
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);             # ➡️ Starts the server  PORT → 3000 , '0.0.0.0' → allows external traffic
});
