const fs = require('fs')
const request = require('request')
const rndmstr = require("randomstring")
const prompt = require('prompt-sync')({ sigint: true })

let floppas = prompt("selecione uma quantidade de floppas para baixar")

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

const url = 'https://api.jbh.rocks/image'

function xisde(){
  path = `./floppa/coolfloppa_${require('randomstring').generate(7)}.png`
}

for (var i = 0; i <floppas; i++){
  xisde()
download(url,path, () =>{
  console.log("floppa salvo com sucesso")
})
}
