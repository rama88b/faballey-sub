const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: 'Segoe UI', sans-serif;
            background: #f0f2f5;
            text-align: center;
            padding-top: 100px;
          }
          h1 {
            font-size: 2.5em;
            color: #4b0082;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1>Welcome To Sub Domain of Demo-byteeit.online</h1>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
