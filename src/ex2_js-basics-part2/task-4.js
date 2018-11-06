'use strict'
function cmElement(arr) {
    var smCount1 = 0
    var i = 0
    for (i; i < arr.length; i++) {
        if (arr[0] === arr[i]) {
            smCount1++
        }
    }
    if (smCount1 === arr.length) {
        return true
    }
    return false
}
module.exports = cmElement