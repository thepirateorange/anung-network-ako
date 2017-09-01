let mix = require('laravel-mix');
var directory = 'anung-network-ako/www/';
/*
 |--------------------------------------------------------------------------
 | Migrate Plugins
 |--------------------------------------------------------------------------
 |
*/

/* ----- Stylesheet ----- */
mix.styles([
    'node_modules/bootswatch/flatly/bootstrap.min.css',   // Bootswatch/Flatfly
    'src/css/app.css'                                      // App Styles
], directory + 'css/app.css');

/* ----- (2) Default Scripts ----- */
mix.scripts([
    'node_modules/jquery/dist/jquery.min.js',              // jQuery
    'node_modules/tether/dist/js/tether.min.js',           // Tether
    'node_modules/bootstrap/dist/js/bootstrap.min.js',     // Bootstrap 4
    'node_modules/vue/dist/vue.min.js',                    // Vue.js
    'src/js/mobilio.js',                                   // Mobilio
    'src/js/app.js',                                       // App Scripts
    'src/js/admob.js'                                      // AdMob
], directory + 'js/app.js');