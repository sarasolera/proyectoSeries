module.exports = function(grunt) {

    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //vamos a ejecutar
        run:{
            //los test, para ello:
            test:{
                //ejecutamos npm 
                cmd: 'npm',
                args: [
                    'test'
                ]
            }
        },

        uglify:{
            build:{
                cmd:'npm',
                args:[
                    'build'
                ]
            }
        }
        
    });

    //Carga el plugin de grunt para hacer la tarea
    grunt.loadNpmTasks('grunt-run');
    //cargamos el plugin para hacer el install
    grunt.loadNpmTasks('grunt-npm-install');

    grunt.loadNpmTasks('grunt-contrib-uglify')
   
    //
    grunt.registerTask('build',["uglify"]);
    //Tarea por omisión: generar la documentación
    grunt.registerTask('test',["run"]);

    //registramos la tarea
    grunt.registerTask('install',["npm-install"]);
    
    //registramos la tarea
   
};