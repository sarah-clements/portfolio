
module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
	cssmin: {
	  options: {
	    shorthandCompacting: false,
	    roundingPrecision: -1
	  },
	  target: {
	    files: {
	      'dist/style.css': 'src/style.css'
	    }
	  }
	},
	imageoptim: {
	  build: {
	    src: ['dist/img', 'dist/img']
		}
	  },
	htmlmin: {                                     
	    build: {                                     
	      options: {                                 
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   
	        'dist/index.html': 'src/index.html'    
	      }
		}
	 }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['htmlmin', 'cssmin', 'imageoptim']);
};


