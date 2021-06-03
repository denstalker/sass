// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js/app.js');
mix.sass('src/scss/clear.scss','public/css/app.css');
mix.sass('src/scss/app.scss','public/css/app.css');