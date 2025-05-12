const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/upload', require('./api/upload'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running on :${PORT}`);
});
