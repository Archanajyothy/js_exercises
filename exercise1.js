/* Level- EASY

Loop the following :

array of values
1. let array = ['apple','banana','mango']

array of objects
2. let array = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]

objects
3. let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}

expected output : apple banana mango */

console.log('1. array of values');
let array1 = ['apple','banana','mango']
array1.forEach(element => {
    process.stdout.write(`${element} `);
});

console.log('\n*************************\n2. array of objects')
let array2 = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]
array2.forEach(element=>{
    process.stdout.write(`${element.fruit} `);
    //console.log(element.fruit);
})

console.log('\n*************************\n3. objects')
let obj1 = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}
const values = Object.values(obj1)
console.log(values.join(' '));