const ratios = {
  '1:1': 1,
  '4:3': 0.75,
  '3:4': 1.3333,
  '16:9': 0.5625,
  '9:16': 1.7777,
}

module.exports = class {

  static extractProps(query = {}) {
    return {
      top: (query.top) ? parseInt(query.top) : null,
      left: (query.left) ? parseInt(query.left) : null,
      width: (query.width) ? parseInt(query.width) : null,
      height: (query.height) ? parseInt(query.height) : null,
    }
  }

  static orderProps(obj = {}) {
    let ordered = {};
    for (const key in obj) {
      ordered[key] = obj[key];
    }
    return ordered;
  }

  static createHash(props = {}) {
    const json = JSON.stringify(this.orderProps(props))
    return json.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a
    }, 0);
  }

  static calcResize({ width, height }, original = {}) {
    const ratio = (width > height) 
      ? (original.height / original.width)
      : (original.width / original.height)
      
    if (height > width) {
      height = parseInt(width * ratio)
    } else {
      width = parseInt(height * ratio)
    }
    
    return { width, height, fit: 'fill' }
  }
  
  static calcExtract(props = {}, original = {}, resize = {}) {

    let top = props.top * (resize.height / original.height)
    let left = props.left * (resize.width / original.width)
  
    left = (props.width > props.height) ? 0 : parseInt(left)
    top = (props.width < props.height) ? 0 : parseInt(top)
  
    if (resize.height < (top + (props.height / 2))) {
      top += resize.height - (top + (props.height / 2))
    }
    if (resize.width < (left + (props.width / 2))) {
      left += resize.width - (left + (props.width / 2))
    }
  
    top -= props.height / 2
    top = (top < 0) ? 0 : top
    left -= props.width / 2
    left = (left < 0) ? 0 : left
  
    return { ...props, top, left }
  }

  static calcRatio(ratio = '', { width, height }, original = {}) {

    if (!width && !height) {
      height = parseInt(original.width * ratios[ratio]);
      width = original.width;
    }

    if (width && !height) {
      height = parseInt(width * ratios[ratio]);
    }

    if (!width && height) {
      ratio = this.invertRatio(ratio)
      width = parseInt(height * ratios[ratio]);
    }
  
    return { width, height }
  }

  static invertRatio(ratio = '') {
    return ratio.split(':').reverse().join(':')
  }
}