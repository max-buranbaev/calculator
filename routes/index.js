exports = module.exports = app => {

    app.use((req, res, next) => next());

    app.get('/calculations', require('../core/calculator').save);

    app.get('/', (req, res, next) => res.render('../public/index.html'));

};