function success(data) {
    const res = { status: 'OK' }

    if (data) res.data = data

    return res
}

function fail(error) {
    const res = { status: 'KO' }

    if (error) res.error = error

    return res
}

module.exports = { success, fail }