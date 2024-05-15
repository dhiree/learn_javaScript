// //1 methord
// const arr = [2, 3, 4, 5, 6, 8]
// function dubble(x) {
//     return x * 2
// }
// //2 methord

// const ok = arr.map(function dubble(x) {
//     return x * 2
// })
// console.log(ok)



// //third methord
// const number = [1, 2, 3, 4, 5];
// const value = number.map(a => a * 2);
// console.log(value)



// //In this case, sum represents each element of the click array as the map()
// const click = [90, 76, 992, 89, 990, "hello"]
// const pull = click.map(sum => sum + 1)
// console.log(pull)




const user = [
    { "fullname": "John Doe", "lastname": "Doe", "age": 30 },
    { "fullname": "Alice Smith", "lastname": "Smith", "age": 25 },
    { "fullname": "Michael Johnson", "lastname": "Johnson", "age": 40 },
    { "fullname": "Emily Brown", "lastname": "Brown", "age": 35 }
]

//1 fname is reparsent the all user array value and it is a arrow function
//2 fname is return
const names = user.map(fname => fname.fullname + fname.lastname)
console.log(names)


