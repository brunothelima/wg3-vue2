const paths  = require('./../config/paths')

module.exports = {
  /**
   * Read a wgconfig object from a given source
   *
   * @return {Object} - the wgconfig json
   */
  getWgConfig() {
    const wgconfig = require(`${paths.WGROOT}/wgconfig`);
    return wgconfig;
  }
}
