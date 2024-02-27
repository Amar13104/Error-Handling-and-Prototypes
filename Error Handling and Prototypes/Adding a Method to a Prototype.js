function Student(name) {
    this.name = name ;
}

Student.prototype.printDetails = function(){
    console.log(`Hello ,  my name is ${this.name}`);
}

const s = new Student("Amar")
s.printDetails()