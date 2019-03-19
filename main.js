// Convert

const sayHello= (name =>{
    // console.log(`Hi, ${name}!`)
    return `Hi, ${name}!`
})

const getOlder= ((age) =>{
    // console.log(age + 50)
    return age + 50
})


// sayHello('Mohammed');
// getOlder(20);

// Debug 1


const multiply = ((num1, num2) => {
    // console.log(num1 * num2)
    return num1 * num2
})   

// multiply(5, 4)

// Debug 2

const subtractFive = ((num) => {
	const diff = num - 5; 
    // console.log(diff);
    return diff
})

// subtractFive(15);

// Debug 3

const printName = ((name) =>{
    // console.log(name)
    return name
})

// printName('Mohammed');


module.exports = {
    sayHello: sayHello,
    getOlder: getOlder,
    multiply: multiply,
    subtractFive: subtractFive,
    printName: printName
   }
