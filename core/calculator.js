const mexp = require('math-expression-evaluator');

exports.save = (req, res, next) => {
    const db = req.app.db;
    const Calculation = db.model('Calculation');

    let newCalculation = new Calculation({
        calculation: req.body.calculation,
        date: req.body.date,
        result: mexp.eval(req.body.calculation)
    });

    newCalculation.save((err, calculation) => {
        if(err) next(err);
        res.status(200).send(calculation);
    });

};