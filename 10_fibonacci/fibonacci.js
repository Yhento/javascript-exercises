const fibonacci = function(num) {
    arr = [];

    if (num < 0) {
        return "OOPS";
    } 

    if (num == 0) {
        return 0;
    }

    if (typeof num === String) {
        num = parseInt(num);
    }

    for (i=0; i<num; i++) {
        if (i == 0 || i == 1){
            arr.push(1);
        }
        else {
            running_total = arr[i-1] + arr[i-2]
            arr.push(running_total);
        }
    }

    return arr[num-1];

};


console.log(fibonacci("25"))

// Do not edit below this line
module.exports = fibonacci;
