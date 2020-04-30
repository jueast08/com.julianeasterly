const path = require('path');

module.exports = {
    chainWebpack: config => {
        let alias = config.resolve.alias;

        alias.set('Source', path.resolve(__dirname,'src'));
        alias.set('Components', path.resolve(__dirname, 'src/components'));
        alias.set('Icons', path.resolve(__dirname, 'src/components/icons'));
        alias.set('Assets', path.resolve(__dirname, 'src/assets')); 
    
    },
}

