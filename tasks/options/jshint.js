module.exports = {
    options: {
        jshintrc: '.jshintrc'
    },
    server : [
        'server/{,*/}*.js'
    ],
    all: [
        'Gruntfile.js',
        'app/scripts/{,*/}*.js',
        '!app/scripts/debug.js'
    ],
    scripts: [
        'app/scripts/**/*.js',
        '!app/scripts/**/*.spec.js',
        '!app/scripts/debug.js'
    ],
    specs: [
        'app/scripts/**/*.spec.js'
    ]
};
