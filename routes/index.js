exports = module.exports = app => {

    app.use((req, res, next) => next());

    app.post('/calculations', require('../core/calculator').save);
    app.get('/calculations', require('../core/calculator').getAll);

    app.get('/', (req, res, next) => res.render('../public/index.html'));

};