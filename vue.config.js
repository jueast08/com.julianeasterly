const path = require('path');

module.exports = {
    chainWebpack: config => {
        let alias = config.resolve.alias;

        alias.set('Root', path.resolve(__dirname,''))
        alias.set('Components', path.resolve(__dirname, 'src/components'))
        alias.set('Icons', path.resolve(__dirname, 'src/components/icons'))    
    },
}

