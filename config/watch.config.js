var watch = require('@ionic/app-scripts/dist/watch');


module.exports = {
    watchers: [
        {
            paths: [
                '{{SRC}}/sass/**/*.(scss)'
            ],
            options: { ignored: ['{{SRC}}/**/*.spec.ts', '**/*.DS_Store'] },
            callback: watch.buildUpdate
        }
    ]
};
