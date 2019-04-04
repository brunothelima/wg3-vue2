const http = require('http');
const fs = require('fs');
const url = require('url');
const sharp = require('sharp');
const ImageHandler = require('./ImageHandler.js')
const extractSize = require('image-size');

http.createServer((request, response) => {

  response.writeHead(200, { 'Content-Type': 'image/webp' })

  const query = url.parse(request.url, true).query;

  if (!query.src) {
    return
  }

  let props = ImageHandler.extractProps(query)
  const original = extractSize(`./${query.src}`)
  const img = `./${ImageHandler.createHash(query)}.webp`;
  
  if (props.left && props.top) {

    const resize = ImageHandler.calcResize(props, original)
    const extract = ImageHandler.calcExtract(props, original, resize)

    sharp(`./${query.src}`)
      .resize(resize)
      .extract(extract)
      .webp()
      .toFile(img, (error) => {
        if (error) {
          console.error(error)
          return;
        }
        fs.createReadStream(img)
          .pipe(response);
      })

    return
  }

  if (query.ratio) {
    props = ImageHandler.calcRatio(query.ratio, props, original)
  }

  if (query.attention) {
    props.position = sharp.strategy.attention;
  }

  sharp(`./${query.src}`)
    .resize(props)
    .webp()
    .toFile(img, () => {
      fs.createReadStream(img)
        .pipe(response);
    })  

}).listen(8081);
