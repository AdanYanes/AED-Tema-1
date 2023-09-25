

interface Employee{
  id: number,
  name: string
}

interface Salary{
  id: number,
  salary: number
}

const Employees: Employee[] = [
  {id: 1, name: "Juan"},
  {id: 2, name: "Luis"},
  {id: 3, name: "Carlos"},
]

const Salaries: Salary[] = [
  {id: 1, salary: 1000},
  {id: 2, salary: 2000},
]

const getEmployee = (id: number, cb:(error: Error | null, name?: string) => void): void =>{
  const employee = Employees.find((el) => el.id === id)

  if(employee){
    cb(null, employee.name)
  }else{
    cb(new Error(`El empleado con id ${id} no existe`))
  }
}

const getSalary = (id: number, cb:(error: Error | null, name?: number) => void): void =>{
  const salary = Salaries.find((el) => el.id === id)

  if(salary){
    cb(null, salary.salary)
  }else{
    cb(new Error(`El salario con id ${id} no existe`))
  }
}

const id= 2
getEmployee(id, (error: Error | null, employee?: string)=>{
  if (error != null){
    console.error(error)
  }else{
    getSalary(id, (error: Error | null, salary?: number)=>{
      if(error != null){
        console.error(error)
      }else{
        console.log('Empleado: ', employee, ' tiene un salario de: ', salary, '€')
      }
    })
  }
})

type EmployeeCallback = (error: Error | null, name?: string) => void
type SalaryCallback = (error: Error | null, name?: number) => void

const getEmployeeDB = (id: number, cb:EmployeeCallback): void =>{
  const employee = Employees.find((el) => el.id === id)

  if(employee){
    cb(null, employee.name)
  }else{
    cb(new Error(`El empleado con id ${id} no existe`))
  }
}

const getSalaryDB = (id: number, cb:SalaryCallback): void =>{
  const salary = Salaries.find((el) => el.id === id)

  if(salary){
    cb(null, salary.salary)
  }else{
    cb(new Error(`El salario con id ${id} no existe`))
  }
}

getEmployeeDB(id, (error, employee)=>{
  if (error != null){
    console.error(error)
  }else{
    getSalaryDB(id, (error, salary)=>{
      if(error != null){
        console.error(error)
      }else{
        console.log('Empleado: ', employee, ' tiene un salario de: ', salary, '€')
      }
    })
  }
})

type Callback<T> = (eror: Error | null, result?: T) => void

const getEmployeeDB2 = (id: number, cb: Callback<string>): void =>{
  const employee = Employees.find((el) => el.id === id)

  if(employee){
    cb(null, employee.name)
  }else{
    cb(new Error(`El empleado con id ${id} no existe`))
  }
}

getEmployeeDB2(id, (error, employee)=>{
  if (error != null){
    console.error(error)
  }else{
    console.log('Empleado: ', employee)
  }
})