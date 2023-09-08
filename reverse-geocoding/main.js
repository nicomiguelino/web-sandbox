const { lookUp } = require('geojson-places');

console.time('lookUp');
let { country_a2: countryCode } = lookUp(14.5995, 120.9842);
console.timeEnd('lookUp');

console.log(`countryCode: <${countryCode}>`);
