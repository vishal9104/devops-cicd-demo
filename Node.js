// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('🚀 DevOps CI/CD Demo Deployed Successfully!'));
app.listen(3000, () => console.log('App listening on port 3000'));
