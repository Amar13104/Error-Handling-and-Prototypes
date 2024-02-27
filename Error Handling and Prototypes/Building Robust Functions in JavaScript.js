function getPerson(person) {
    try {
        if (typeof person != "object" ||  !person.name || !person.age) {
            throw new Error ("invalid Parameter type !!")
        }
        return `name: ${person.name} , age: ${person.age}`
    } catch (error) {
        return error.message ; 
    }
}

console.log(getPerson({ name: "Mithun", age: 20 })); 
console.log(getPerson({ name: "Mithun" })); 
console.log(getPerson(["name", "Mithun"]));