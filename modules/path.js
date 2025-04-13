const path = require('path');

// Basename
console.log(path.basename(__filename)); // path.js

// Directory name
console.log(path.dirname(__filename)); // modules

// File extension
console.log(path.extname(__filename)); // .js

// Criar ogjeto Path
console.log(path.parse(__filename)); // { root: '/', dir: '/home/andre/Documentos/Projetos/NodeJS/modules', base: 'path.js', ext: '.js', name: 'path' }