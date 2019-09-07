const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
        'es6/app.js',

    ], 'public/js/app.js')
    // .js('resources/assets/js/config//mixins/tupersona.js', 'public/js/tupersona.js')
    
    .sass('sass/styles.scss', 'public/css')
