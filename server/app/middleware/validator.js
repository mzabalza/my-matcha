
module.exports = (params) => {

    // Why not shown?
    // console.log(`params: ${params}`);

    return function (req, res, next) {


        let missing = [];

        const keys = Object.keys(req.body)

        params.map((key) => {
            if (!keys.includes(key)) {
                missing = [...missing, key]
            }
        })
        console.log(`missing: ${missing}`);
        if (missing.length > 0) {
            return res.status(400).json({
                message: `Missing arguments: ${missing}`
            });
        }
        next();
    };
}