const http = require('http');
const url = require('url');
const sharp = require('sharp');
const imageSize = require('image-size');

const ratios = { '1:1': 1, '16:9': 1.7777, '9:16': 0.5625, '4:3': 1.3333, '3:4': 0.75 }

http.createServer((request, response) => {
  
  response.writeHead(200, {'Content-Type': 'image/webp'})

  const url_parts = url.parse(request.url, true);
  const query = url_parts.query;

  if (!query.img) {
    return
  }
  
  const options = {};
  const imgRes = imageSize(`./${query.img}`)  
  const r = (query.ratio) ? query.ratio : null;
  
  options.width = (query.width) ? parseInt(query.width) : null;
  options.height = (query.height) ? parseInt(query.height) : null;
  options.left = (query.x) ? parseInt(query.x) : null;
  options.top = (query.y) ? parseInt(query.y) : null;

  if (options.left && options.top) {

    if (options.width > (imgRes.width - options.left)) {
      options.left = options.left - (options.width - (imgRes.width - options.left))
    }

    if (options.height > (imgRes.height - options.top )) {
      options.top = options.top - (options.height - (imgRes.height - options.top))
    }

    sharp(`./${query.img}`)
      .extract(options)
      .toFile('./image_after_focused.webp')

    return
  }

  options.position = sharp.strategy.attention;

  if (r) {  
    options.position = 'center';
    if (!options.width && !options.height) {
      options.height = parseInt(imgRes.width * ratios[r]);
      options.width = imgRes.width;
    }
    if (options.width && !options.height) {
      options.height = parseInt(options.width * ratios[r]);
    }
    if (!options.width && options.height) {
      options.width = parseInt(option.height * ratios[r]);
    }
  }

  sharp(`./${query.img}`)
    .resize(options)
    .toFile('./image_after_attention.webp')
  
  response.end()

}).listen(8081);