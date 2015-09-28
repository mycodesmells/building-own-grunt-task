module.exports = function (grunt) {

    grunt.initConfig({
        killEval: {
            files: {
                src: ['./features/*.js']
            }
        }
    });

    grunt.loadTasks("./_grunt");
};