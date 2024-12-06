function count_elem() {
    
let arr = ["bike-1", 25000, "bike-2", 50000, "cost", true, 1, null, NaN, 2, Infinity, 333, 8, 0, 7];
let evenNum = 0;
let oddNum = 0;
let nullNum = 0;
let otherItem = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === 0) {
        nullNum++
    } else if(typeof arr[i] === 'number' && arr[i] % 2 === 0) {
        evenNum ++;
    } else if (typeof arr[i] === 'number' && arr[i] % 2 !== 0 && !(Number.isNaN(arr[i] % 2))) {
        oddNum++;
    } else {
        otherItem++;
    }
}

console.log(`Количество четных: ${evenNum}, количество нечетных: ${oddNum},
количество нулей: ${nullNum}, количество иных элеменотов: ${otherItem}`
);
}

count_elem();