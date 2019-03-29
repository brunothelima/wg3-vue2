const http = require('http');
const fs = require('fs');
const url = require('url');
const sharp = require('sharp');
const imageSize = require('image-size');

const ratios = { 
  '1:1': 1, 
  '4:3': 0.75, 
  '3:4': 1.3333,
  '16:9': 0.5625, 
  '9:16': 1.7777, 
}

function sort(obj) {
  let ordered = {};
  for (const key in obj) {
    ordered[key] = obj[key];
  }
  return ordered;
}

function hash(str) {
  return str.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
}

http.createServer((request, response) => {

  response.writeHead(200, { 'Content-Type': 'image/webp' })

  const url_parts = url.parse(request.url, true);
  const query = url_parts.query;

  if (!query.src) {
    return
  }

  const img = `./${hash(JSON.stringify(sort(query)))}.webp`;
  
  // if (fs.existsSync(img)) {
  //   fs.createReadStream(img)
  //     .pipe(response);
  //   return
  // }

  const params = {};
  const original = imageSize(`./${query.src}`)

  params.width = (query.width) ? parseInt(query.width) : null;
  params.height = (query.height) ? parseInt(query.height) : null;
  params.left = (query.x) ? parseInt(query.x) : null;
  params.top = (query.y) ? parseInt(query.y) : null;

  if (params.left && params.top) {

    // TODO

    sharp(`./${query.src}`)
      .extract(params)
      .webp()
      .toFile(img, (a ,b) => {
        console.error(a)
        fs.createReadStream(img)
          .pipe(response);
      })

    return
  }

  if (query.ratio) {
    params.position = 'center';
    let ratio = query.ratio;
    if (!params.width && !params.height) {
      params.height = parseInt(original.width * ratios[ratio]);
      params.width = original.width;
    }
    if (params.width && !params.height) { 
      params.height = parseInt(params.width * ratios[ratio]);
    }
    if (!params.width && params.height) {
      ratio = ratio.split(':').reverse().join(':')
      params.width = parseInt(params.height * ratios[ratio]); 
    }
  }

  if (query.attention) {
    params.position = sharp.strategy.attention;
  }

  sharp(`./${query.src}`)
    .resize(params)
    .webp()
    .toFile(img, () => {
      fs.createReadStream(img)
        .pipe(response);
    })

}).listen(8081);