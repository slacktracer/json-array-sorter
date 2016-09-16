var assert
var config1
var config2
var config3
var expectedOutput1
var expectedOutput2
var expectedOutput3
var sorter
var testData

assert = require('assert')
sorter = require('./sorter')
testData = require('./data.json')

config1 = [
    {
        "column": "title",
        "order": "ascending"
    }
]

expectedOutput1 = [
    {
        id: 'Book 3',
        title: 'Head First Design Patterns',
        author: 'Elisabeth Freeman',
        year: 2004
    },
    {
        id: 'Book 4',
        title: 'Internet & World Wide Web: How To Program',
        author: 'Deitel & Deitel',
        year: 2007
    },
    { id: 'Book 1',
        title: 'Java How To Program',
        author: 'Deitel & Deitel',
        year: 2007
    },
    {
        id: 'Book 2',
        title: 'Patterns of Enterprise Application Architecture',
        author: 'Martin Fowler',
        year: 2002
    }
]

config2 = [
    {
        "column": "author",
        "order": "ascending"
    },
    {
        "column": "title",
        "order": "descending"
    }
]

expectedOutput2 = [
    {
        id: 'Book 1',
        title: 'Java How To Program',
        author: 'Deitel & Deitel',
        year: 2007
    },
    {
        id: 'Book 4',
        title: 'Internet & World Wide Web: How To Program',
        author: 'Deitel & Deitel',
        year: 2007
    },
    {
        id: 'Book 3',
        title: 'Head First Design Patterns',
        author: 'Elisabeth Freeman',
        year: 2004
    },
    {
        id: 'Book 2',
        title: 'Patterns of Enterprise Application Architecture',
        author: 'Martin Fowler',
        year: 2002
    }
]

config3 = [
    {
        "column": "year",
        "order": "descending"
    },
    {
        "column": "author",
        "order": "descending"
    },
    {
        "column": "title",
        "order": "ascending"
    }
]

expectedOutput3 = [
    {
        id: 'Book 4',
        title: 'Internet & World Wide Web: How To Program',
        author: 'Deitel & Deitel',
        year: 2007
    },
    {
        id: 'Book 1',
        title: 'Java How To Program',
        author: 'Deitel & Deitel',
        year: 2007
    },
    {
        id: 'Book 3',
        title: 'Head First Design Patterns',
        author: 'Elisabeth Freeman',
        year: 2004
    },
    {
        id: 'Book 2',
        title: 'Patterns of Enterprise Application Architecture',
        author: 'Martin Fowler',
        year: 2002
    }
]

console.log('Test Case 1: Title ascending')
assert.deepEqual(
    sorter(
        config1,
        testData
    ),
    expectedOutput1,
    'Output does not match expected output! Danger! Danger!'
)
console.log('Test Case 1 OK!')

console.log('Test Case 2: Author ascending, title descending')
assert.deepEqual(
    sorter(
        config2,
        testData
    ),
    expectedOutput2,
    'Output does not match expected output! Danger! Danger!'
)
console.log('Test Case 2 OK!')

console.log('Test Case 3: Year descending, author descending, title descending')
assert.deepEqual(
    sorter(
        config3,
        testData
    ),
    expectedOutput3,
    'Output does not match expected output! Danger! Danger!'
)
console.log('Test Case 3 OK!')

console.log('Test Case 4: Null configuration')
assert.throws(
    () => sorter(
        null,
        testData
    )
)
console.log('Test Case 4 OK!')

console.log('Test Case 5: Null data')
assert.throws(
    () => sorter(
        config1, // reusing config1
        null
    )
)
console.log('Test Case 5 OK!')

console.log('Test Case 6: Empty configuration')
assert.deepEqual(
    sorter(
        [],
        testData
    ),
    [],
    'Output does not match expected output! Danger! Danger!'
)
console.log('Test Case 6 OK!')

console.log('Test Case 7: Empty data')
assert.deepEqual(
    sorter(
        config1, // reusing config1
        []
    ),
    [],
    'Output does not match expected output! Danger! Danger!'
)
console.log('Test Case 7 OK!')
