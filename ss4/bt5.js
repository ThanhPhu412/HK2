let longStrings = ["Hello, world!", "Hello"];
let shortStrings = ["Hi there!", "there"];

function checkStartString(longStrings, shortStrings) {
    let results = [];

    // Lặp qua từng cặp chuỗi trong mảng và kiểm tra
    for (let i = 0; i < longStrings.length; i++) {
        let longStr = longStrings[i];
        let shortStr = shortStrings[i];

        // Sử dụng phương thức startsWith để kiểm tra
        results.push(longStr.startsWith(shortStr));
    }

    return results;
}

console.log(checkStartString(longStrings, shortStrings)); 

