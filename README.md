# json-array-sorter
Sort an array of objects (or a similar json file) by one or more properties in ascending or descending order. Using 'require' or the CLI.

## What is this?

This is an JS array of objects sorter. Say you have the following data:

```javascript
[
    {
        "id": "Book 1",
        "title": "Java How To Program",
        "author": "Deitel & Deitel",
        "year": 2007
    },
    {
        "id": "Book 2",
        "title": "Patterns of Enterprise Application Architecture",
        "author": "Martin Fowler",
        "year": 2002
    },
    {
        "id": "Book 3",
        "title": "Head First Design Patterns",
        "author": "Elisabeth Freeman",
        "year": 2004
    },
    {
        "id": "Book 4",
        "title": "Internet & World Wide Web: How To Program",
        "author": "Deitel & Deitel",
        "year": 2007
    }
]

```

And you use the following configuration object:

```javascript
[
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
```

The sorter will return the following object (or generate a .json file, depending on how you are using it):

```javascript
[
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
```

The test.js show a few other configuration objects but that's most ellaborate one.

## How to use it?

You'll need Node.js. Then you can require it:

```javascript
sorter = require('json-array-sorter')
```

Give it two arrays (a configuration one and a data one) and get a sorted array back:

```javascript
let sortedArray = sorter(
    [
        {
            "column": "title",
            "order": "ascending"
        }
    ],
    [
        {
            "id": "Book 1",
            "title": "Java How To Program",
            "author": "Deitel & Deitel",
            "year": 2007
        },
        {
            "id": "Book 2",
            "title": "Patterns of Enterprise Application Architecture",
            "author": "Martin Fowler",
            "year": 2002
        },
        {
            "id": "Book 3",
            "title": "Head First Design Patterns",
            "author": "Elisabeth Freeman",
            "year": 2004
        },
        {
            "id": "Book 4",
            "title": "Internet & World Wide Web: How To Program",
            "author": "Deitel & Deitel",
            "year": 2007
        }
    ]
)
```

### Using the CLI, BUT NOT REALLY

If you have it installed you can go its folder and use directly passing three arguments.

```javascript
 node sorter config.json data.json output.json
```

You must pass the location of the configuration .json file, the data .json file and a name for the output file.

I am considering have it being able to be installed globally and so you can use from anywhere... Not sure how to do it best, I am not a great package creator, yet. =P

## Is it good to go?

Well... It works. =)

It's just a beta for now, and I'm not sure how useful it is in the real world. But you should try it yourself and perhaps send me a pull request eventually. This my first npm package and was created as an exercise so it is not great, yet.

Do get in touch if you have any questions or a good use case for it. =P

___

***Technical Assesment Instructions:** just download it and run `node test` or `npm test`. Or install it using npm and then `cd` into the `json-array-sorter` folder inside `node_modules` and run `node test`.*
