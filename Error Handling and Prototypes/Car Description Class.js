class car{
    constructor(company , model , year){
       this.company = company ;
       this.model = model ; 
       this.year = year ;
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.modle}`
    }
 
}

const mycar = new car("Skoda" , "Rapid" , 2022);

console.log(mycar.getDescription());