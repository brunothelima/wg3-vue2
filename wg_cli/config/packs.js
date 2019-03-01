/**
 * Each pack is simply an array which will be
 * injected on the key "modules" of the wgconfig,
 * which represents a pre configuration for common
 * projects ecosystems.
 *
 * To create a starter pack, open a new key in
 * this object, give it a name (yourPack for ex)
 * and list the modules that will be pre installed
 * on a wg init {yourPack}
 *
 * @type Json
 */
module.exports = {
  "default": [
    "WgContent",
    "WgFoundation"
  ],
  "portal": [
    "WgContent",
    "WgFoundation"
  ],
  "hospital": [
    "WgContent",
    "WgFoundation"
  ]
}
