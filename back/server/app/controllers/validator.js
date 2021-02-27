
const validateParams = (params, keys) => {

    let missing = [];

    if (keys.every((key) => {
        const isIn = key in params;
        if (!isIn) { missing.push(key); }
        return isIn;
    })) {
        return false;
    }
    console.log(missing);
    return missing


};

module.exports = { validateParams };