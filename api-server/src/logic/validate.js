function validate(data) {
    for (const prop in data) {
        const value = data[prop]

        if (typeof value === 'undefined' || !value.toString().trim().length) throw Error(`${prop} cannot be undefined or empty`)
    }
}

module.exports = validate