module.exports = function(grunt) {

	grunt
			.initConfig({
				pkg : grunt.file.readJSON("package.json"),
				clean: ["output"],
				concat : {
					js : {
						files : {
							"output/js/console.js" : [ 
							        "js/jquery-2.2.0.js", 
							        "js/bootstrap.min.js", 
							        "js/jquery.cookie.js", 
							        "js/jquery.enterpress.js", 
							        "js/jquery.numeric.js", 
							        "js/prettify.js", 
							        "js/String.js", 
							        "js/utils.js", 
							        "js/vkbeautify.0.99.00.beta.js", 
							        "js/consolesettings.js"]
						},
					}
				},
				uglify : {
					dist : {
						files : {
							"output/js/console.min.js" : [ "output/js/console.js" ]
						}
					}
				},
				cssmin : {
					options : {
						shorthandCompacting : false,
						roundingPrecision : -1
					},
					target : {
						files : {
							"output/css/console.min.css" : [ "css/bootstrap.min.css", "css/bootstrap.min.css", "css/console.css", "css/prettify.css", "css/console-extra.css" ]
						}
					}
				},
				copy : {
					main : {
						files : [{
							expand : true,
							src : [ "fonts/**", "img/**" ],
							dest : "output/"
						}, {
							src: ["*.html"],
							dest: "output/"
						}, {
							src: ["plugin/**"],
							dest: "output/"
						}]
					}
				},
				zip: {
					"using-cwd": {
						cwd: "output",
						src: ["output/**"],
						dest: "output/bimviews-%VERSION%.zip"
					}
				}
			});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-zip");

	grunt.registerTask("default", [ "clean", "concat", "uglify", "cssmin", "copy" ]);
};