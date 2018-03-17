function validate(tenant) {
    for (const prop in tenant) {
        const value = tenant[prop]

        if (typeof value === 'undefined' || !value.toString().trim().length) throw Error(`${prop} cannot be undefined or empty`)
    }
}

module.exports = validate