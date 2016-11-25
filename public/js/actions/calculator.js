exports.calculate = calculation => {
    return {
        type: "CALCULATE",
        url: "/calculations",
        data: {
            calculation: calculation,
            date: Date.now()
        }
    }
}