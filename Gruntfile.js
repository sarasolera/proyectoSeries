module.exports = function(grunt) {

    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //vamos a ejecutar
        run:{
            // los test, para ello:
            test:{
                //ejecutamos npm 
                cmd: 'npm',
                args: [
                    'test'
                ]
            }
        }
    });

    //Carga el plugin de grunt para hacer la tarea
    grunt.loadNpmTasks('grunt-run');
    //Tarea por omisión: generar la documentación
    grunt.registerTask('test',["run"]);
};