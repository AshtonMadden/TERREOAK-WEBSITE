const sharp = require('sharp');
sharp('public/logo.png')
  .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
  .flatten({ background: { r: 0, g: 0, b: 0 } })
  .toFile('app/icon.png')
  .then(info => console.log(info))
  .catch(err => console.error(err));
