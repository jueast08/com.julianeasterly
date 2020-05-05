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

        alias.set('Source', path.resolve(__dirname,'src'));
        alias.set('Components', path.resolve(__dirname, 'src/components'));
        alias.set('Icons', path.resolve(__dirname, 'src/components/icons'));
        alias.set('Assets', path.resolve(__dirname, 'src/assets')); 
    
    },
}

