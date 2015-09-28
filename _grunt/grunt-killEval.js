module.exports = function (grunt) {

    grunt.registerMultiTask('killEval', function () {

        var evalsCount = 0;

        this.files.forEach(function (filepath) {

            filepath.src.filter(function(file) {
                if (grunt.file.exists(file)) {

                    var fileLines = grunt.file.read(file).split('\n');

                    fileLines.forEach(function(line, index){
                        var evalFound = line.indexOf('eval(') !== -1;

                        if (evalFound) {
                            evalsCount++;
                            console.warn('! Eval found in file ' + file + ', line ' + index);
                        }
                    });

                }
            });

        });

        if(evalsCount) {
            console.warn('  Total evals found: ' + evalsCount);
        }

    });
};