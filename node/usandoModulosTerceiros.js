const _ = require('lodash') //Irá buscar dentro da pasta node_modules o arquivo index
setInterval(() => console.log(_.random(5, 10)), 2000)