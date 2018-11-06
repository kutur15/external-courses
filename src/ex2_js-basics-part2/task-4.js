'use strict'
function cmElement(arr) {
    var smCount = 0
    var i = 0
    for (i; i < arr.length; i++) {
        if (arr[0] === arr[i]) {
            smCount++
        }
    }
    if (smCount === arr.length) {
        return true
    }
    return false
}
module.exports = cmElement