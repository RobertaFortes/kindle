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
	     }
  });
   //registrando task para minificação
   grunt.registerTask('dist', ['clean', 'copy']);
   grunt.registerTask('minifica', ['useminPrepare', 
                                  'concat', 'uglify', 'cssmin', 'usemin']);

   // registrando tasks
   grunt.registerTask('default', ['dist']);

   // carregando tasks
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-usemin'); 


};