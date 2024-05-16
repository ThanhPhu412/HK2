function checkEndStrings(longStrings, shortStrings) {
    return longStrings.endsWith(shortStrings)
}

console.log(checkEndStrings("Hello, World!", "Hello"));
console.log(checkEndStrings("Hi there!", "there!"));