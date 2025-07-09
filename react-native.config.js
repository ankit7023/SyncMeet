module.exports = {
    project: {
        ios: {},
        android: {}
    },
    assets: ['./src/assets/fonts/'],
    getTransformModulePath() {
        return require.resolve('react--native-typescript-transform');
    },
    getSourceExts() {
        return ['ts','tsx'];
    },
};

