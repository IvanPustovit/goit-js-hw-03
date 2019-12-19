"use strict"
const findBestEmployee = function (employees) {
    
    const maxArr = Object.values(employees);
    let maxValue = Math.max(...maxArr)
    // let maxValue = Math.max.apply(null, maxArr)
    for (let key in employees){
        if (employees[key] === maxValue){
            maxValue = key;
        }
    } return maxValue
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux