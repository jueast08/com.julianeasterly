const path = require('path');

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'Julian EASTERLY - IT Business Analyst and Developer',
            description: 'Julian EASTERLY - IT Business Analyst and Developer', //@TODO add a description for SEO optimisation 120 à 140 caractères
        }
    },
    chainWebpack: config => {
        let alias = config.resolve.alias;
        alias.set('Assets', path.resolve(__dirname, 'src/assets'));
        alias.set('Bases', path.resolve(__dirname, 'src/components/bases'));
        alias.set('Common', path.resolve(__dirname, 'src/components/common'));
        alias.set('Components', path.resolve(__dirname, 'src/components'));
        alias.set('Icons', path.resolve(__dirname, 'src/components/icons'));
        alias.set('Layout', path.resolve(__dirname, 'src/components/layout'));
        alias.set('Pages', path.resolve(__dirname, 'src/pages'));
        alias.set('Source', path.resolve(__dirname,'src'));
        alias.set('Utility', path.resolve(__dirname, 'src/utility'));
        alias.set('UI', path.resolve(__dirname, 'src/components/ui'));



    
    },
}

