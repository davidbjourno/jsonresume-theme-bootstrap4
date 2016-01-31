var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
	var bootstrapCss = fs.readFileSync(__dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css", "utf-8");
	return Handlebars.compile(tpl)({
		css: css,
		resume: resume,
		bootstrapCss: bootstrapCss
	});
}

module.exports = {
	render: render
};
