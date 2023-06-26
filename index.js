function myEach(collection, callback) {
    let array;
    if (typeof collection === 'object') {
        array = Object.assign(collection)
        collection = Object.values(collection)
    }
    for (let i = 0; i < collection.length; i++) {
        callback(collection[i])
    }
    return array
};

function myMap(collection, callback) {
    if (typeof collection === 'object') {
        collection = Object.values(collection)
    }
    for(let i = 0; i < collection.length; i++) {
        collection[i] = callback(collection[i])
    }
    return collection
};

function myReduce(collection, callback, acc) {
    // if object
    if (typeof collection === 'object') {
        collection = Object.values(collection)
    }
    if (acc === undefined) { // if no starting value
        acc = collection[0]
        for (let i = 1; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection)
        }
    } else { //if starting value
        for (let i = 0; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection)
        }
    }
    return acc
};


function myFind(collection, predicate) {
    // if object
    if (typeof collection === 'object') {
        collection = Object.values(collection)
    }

    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])){
            return collection[i]
        }
    }
    return undefined
};

function myFilter(collection, predicate) {
    // if object
    if (typeof collection === 'object') {
        collection = Object.values(collection)
    }
    let array = []
    for(let item of collection){
        if (predicate(item)) {
            array.push(item)
        }
    }
    return array
};

function mySize(collection) {
    if (typeof collection === 'object') {
        collection = Object.values(collection)
    }
    let integer = 0 
    for(let item in collection){
        integer = (Number(item) + 1)
    }
    return integer
};

function myFirst(array, integer) {
    if (typeof collection === 'object') {
        collection = Object.values(collection)
    }
    let result = []
    if (integer === undefined) {
        return array[0]
    } else {
        for(let i = 0; i < integer; i++) {
            result.push(array[i])
        }
    return result
    } 

};

function myLast(array, integer) {
    if (typeof collection === 'object') {
        collection = Object.values(collection)
    }
    if (integer === undefined) {
        return array[array.length -1]
    } else {
        let length = array.length
        let start = length - integer
        return array.slice(start, length)
        }
};

function myKeys(object) {
    let array = []
    array = Object.keys(object)
    return array
};

function myValues(object) {
    let array = []
    array = Object.values(object)
    return array
};