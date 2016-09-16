var config
var configLocation
var data
var dataLocation
var fs
var output
var outputLocation

fs = require('fs')

module.exports = sorter

function basicComparator(x, y) {
    if (x > y) return 1
    if (x < y) return -1
    return 0
}

function order(order) {
    if (order === 'ascending') return 1
    return -1
}

function makeCustomComparator(config) {

    return function (a, b) {

        var array1
        var array2

        array1 = []
        array2 = []

        config.forEach(function forEachRow(row) {

            array1.push(order(row['order']) * basicComparator(a[row['column']], b[row['column']]))
            array2.push(order(row['order']) * basicComparator(b[row['column']], a[row['column']]))

        })

        return basicComparator(array1, array2)

    }

}

function sorter(config, data) {
    var copy
    if (config === null) throw new Error('SortingServiceException')
    if (data === null) throw new Error('SortingServiceException')
    if (config.length === 0) return []
    if (data.length === 0) return []
    copy = data.slice()
    return copy.sort(makeCustomComparator(config))
}

configLocation = process.argv[2]
dataLocation = process.argv[3]
outputLocation = process.argv[4]

if (
    configLocation
    &&
    dataLocation
    &&
    outputLocation
) {
    config = JSON.parse(fs.readFileSync(configLocation, { encoding: 'utf8' }))
    data = JSON.parse(fs.readFileSync(dataLocation, { encoding: 'utf8' }))
    output = JSON.stringify(sorter(config, data), null, 4)
    if (fs.existsSync(outputLocation)) {
        fs.unlinkSync(outputLocation)
    }
    fs.appendFileSync(outputLocation, output)
}
