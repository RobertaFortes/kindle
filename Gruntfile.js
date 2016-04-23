/* recebe o objeto grunt como parâmetro*/
module.exports = function(grunt) {
   grunt.initConfig({
   	/* Copia os arquivos para o diretório 'dist' */
       copy: {
              public: {
                   cwd: 'public', 
                   src: '**', 
                   dest: 'dist', 
                   expand: true
              }
         }, 
         clean: {
              dist: {
                  src: 'dist'
              }
         },

         useminPrepare: {
	       html: 'dist/**/*.html'
	     },

	     usemin: {
	       html: 'dist/**/*.html'
	     },

	     imagemin: {
	      public: {
	        expand: true,
	        cwd: 'dist/imgs',
	        src: '**/*.{png,jpg,gif}',
	        dest: 'dist/imgs'
	      }
	    },
	    rev: {
	      options: {
	        encoding: 'utf8',
	        algorithm: 'md5',
	        length: 8
	      },

	      imagens: {
	        src: ['dist/imgs/**/*.{png,jpg,gif}']
	      },
	      minificados: {
	        src: ['dist/js/**/*.min.js', 'dist/css/**/*.min.css']
	      }
    	}   
  });
   //registrando task para minificação
   grunt.registerTask('dist', ['clean', 'copy']);
   grunt.registerTask('minifica', ['useminPrepare', 
                                  'concat', 'uglify', 'cssmin', 'rev:imagens','rev:minificados', 'usemin', 'imagemin']);

   // registrando tasks
   grunt.registerTask('default', ['dist', 'minifica']);

   // carregando tasks
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-usemin'); 
   grunt.loadNpmTasks('grunt-contrib-imagemin'); 
   grunt.loadNpmTasks('grunt-rev'); 



};