module.exports = function(format) {
    var date = new Date()
    var a = date.toLocaleDateString().replace(/-/g, '')
    var b = date.toLocaleTimeString().replace(/:/g, '')

    switch (format) {
        case 1:
            return a + '.' + b
        case 2:
            return a
        default:
            return a + b
    }
}
