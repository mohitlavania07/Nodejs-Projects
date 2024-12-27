module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("You are in home ");
    } else if (req.query.age < 18) {
        res.send("Not Eligible");
    } else {
        next();
    }
};