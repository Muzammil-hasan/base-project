let mix = require("laravel-mix");

mix.browserSync({
	proxy: "http://baseproject.local",
	files: ["**/*.html", "dist/css/**/*.css", "dist/js/**/*.js"],
	// injectChanges: true,
	// open: false,
});

mix.js("src/js/app.js", "dist/js").sass("src/sass/style.scss", "dist/css");
