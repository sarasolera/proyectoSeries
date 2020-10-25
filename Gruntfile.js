module.exports = function(grunt) {

    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            test_jest: {
                cmd: 'npm',
                args: [
                    'run',
                    'test'
                ]
            }
        }
    });

    //Carga el plugin de grunt para hacer la tarea
    grunt.loadNpmTasks('grunt-run');
    //Tarea por omisión: generar la documentación
    grunt.registerTask('default',['run:test_jest']);
};