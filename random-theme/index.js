const fs = require('fs')
const template = require('./template.json')
function randomHexColor () {
  // https://www.paulirish.com/2009/random-hex-color-code-snippets/
  return '#'+Math.floor(Math.random()*16777215).toString(16)
}
for (const x in template.colors) {
  template.colors[x] = randomHexColor()
}
console.log(template.colors)
fs.writeFile('theme.json', JSON.stringify(template), (err) => {
  if (err) return console.log(err)
  console.log('success')
})

