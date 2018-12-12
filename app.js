module.exports = function(format) {

    function z(n) {
        return n.toString().padStart(2, '0')
    }

    var date = new Date()

    var a = date.getFullYear() + z(date.getMonth() +1) +z(date.getDate())
    var b = z(date.getHours()) + z(date.getMinutes()) + z(date.getSeconds())
    var c = date.getMilliseconds().toString().padStart(3, '0')

    switch (format) {
        case 1:
            return a + '.' + b
        case 2:
            return a + '.' + b + '.' + c
        default:
            return a
    }
}