const http = require('http');
const fs = require('fs');
const url = require('url');
const sharp = require('sharp');
const hash = require('object-hash');
const imageSize = require('image-size');

const ratios = { '1:1': 1, '16:9': 0.5625, '9:16': 1.7777, '4:3': 0.75, '3:4': 1.3333 }

function sort(obj) {
  var ordered = {};
  Object.keys(obj).sort().forEach(function(key) {
    ordered[key] = obj[key];
  });
  return ordered;
}

http.createServer((request, response) => {
  
  response.writeHead(200, {'Content-Type': 'image/webp'})

  const url_parts = url.parse(request.url, true);
  const query = url_parts.query;

  if (!query.img) {
    return
  }

  const img = `./${hash(sort(query))}.webp`;
  if (fs.existsSync(img)) {
    fs.createReadStream(img).pipe(response);
    return
  }

  
  const params = {};
  const original = imageSize(`./${query.img}`)  
  
  params.width = (query.width) ? parseInt(query.width) : null;
  params.height = (query.height) ? parseInt(query.height) : null;
  params.left = (query.x) ? parseInt(query.x) : null;
  params.top = (query.y) ? parseInt(query.y) : null;

  if (params.left && params.top) {
    
    const halfWidth = (params.width / 2)
    const halfHeight = (params.height / 2)

    params.left = params.left - halfWidth
    params.top = params.top - halfHeight
    
    if (params.left < 0) {
      params.left = 0
    } 
    if ((params.left + halfWidth) > original.width) {
      params.left -= (params.left + halfWidth) - original.width
    }
    if (params.top < 0) {
      params.top = 0
    }
    if ((params.top + halfHeight) > original.height) {
      params.top -= (params.top + halfHeight) - original.height
    }     

    sharp(`./${query.img}`)
      .extract(params)
      .webp()
      .toFile(img, () => {
        fs.createReadStream(img)
        .pipe(response);
      })

    return
  }
  
  if (query.ratio) {  
    params.position = 'center';
    if (!params.width && !params.height) {
      params.height = Math.ceil(original.width * ratios[query.ratio]);
      params.width = original.width;
    }
    if (params.width && !params.height) {
      params.height = Math.ceil(params.width * ratios[query.ratio]);
    }
    if (!params.width && params.height) {
      params.width = Math.ceil(params.height * ratios[query.ratio]);
    }
  }

  if (query.attention) {
    params.position = sharp.strategy.attention;
  }

  sharp(`./${query.img}`)
    .resize(params)
    .webp()
    .toFile(img, () => {
      fs.createReadStream(img)
        .pipe(response);
    })

}).listen(8081);