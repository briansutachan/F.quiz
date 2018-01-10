const workers = [

   { name: "Nobody Homeless", 
     hourlyRate: 8.25,
     hoursWorked: 40
},
    { name: "Nobody Homeless", 
     hourlyRate: 8.25,
    hoursWorked: 40
},
    { name: "Nobody Homeless", 
    hourlyRate: 8.25,
    hoursWorked: 40
}

]

class Payroll {
     
    constructor(workers){
        this.workers = workers
        this.names = this.getNames(this.workers)
        this.fullTime = this.getFullTime(this.workers)
        this.TotalLabor = this.getTotalLabor(this.workers)

    }

    getNames(workers){
        const newarray = workers.map((emp)=>{
            return emp.name
        })
        // console.log(newarray)
        return newarray.sort()
    }   
    getFullTime(workers){
        return workers.filter((emp)=>{
            return (emp.hourlyRate >= 60) ? 1 : 0
        })
    }

    getTotalLabor(workers){
        return workers.reduce((acc, cur)=>{
            return acc + (cur.hourlyRate * cur.hoursWorked)
        }, 0)
    }
}
const pay = new Payroll(array)
console.log(pay.names)
console.log(pay.fullTime)
console.log(pay.TotalLabor)

