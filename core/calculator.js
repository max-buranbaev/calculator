exports.save = (req, res, next) => {
    const db = req.app.db;
    const Calculation = db.model('Calculation');

    let newCalculation = new Calculation({
        calculation: req.query.calculation,
        date: req.query.date,
        result: eval(req.query.calculation)
    });

    newCalculation.save((err, calculation) => {
        if(err) next(err);
        res.status(200).send(calculation);
    });

};