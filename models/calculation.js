exports = module.exports = (app, mongoose) => {
    const calculationSchema = new mongoose.Schema({
        calculation: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: new Date()
        },
        result: {
            type: Number
        }
    });

    app.db.model('Calculation', calculationSchema);
};