/*
 * the server is going to get invoked as 
 * http://localhost:3030/123456
 *
 * we need to just get the <123456> part from the url
 * and generate a page with background color as it
 * */

const http = require('http');

const makePage = (color) => {
  let title = 'RGB color page generator';
  let body = `
    <p>
      This is a simple color previewer.
      <a href="/123456">Click for example usage :)</a>
    </p>
    `;

  if (color) {
    title = `#${color}`
    body = '';
  } else {
    color = 'fff';
  }

  const text = 
    `
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body style="background-color:#${color}">
        ${body}
      </body>
    </html>
    `;
  return text;
}

const server = http.createServer((req, res) => {
  // log every request
  console.log(`${new Date().toISOString()} - ${req.method} - ${req.url}`);

  // get the url 
  const req_url = req.url.toLowerCase();
  const color = req_url.split('/')[1];

  const html = makePage(color)

  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end(html);
  return;

});

module.exports = server;
