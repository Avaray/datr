module.exports = function(format) {

    function add_zero(n) {
        return (n < 10 ? '0' : '') + n;
    }

    var date = new Date()

    var a = [date.getFullYear()] + [add_zero(date.getMonth())] + [add_zero(date.getDate())]
    var b = [add_zero(date.getHours())] + [add_zero(date.getMinutes())] + [add_zero(date.getSeconds())]

    switch (format) {
        case 1:
            return a + '.' + b
        case 2:
            return a
        default:
            return a + b
    }
}