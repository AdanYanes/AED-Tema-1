

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

const getEmployee = (id: number): Promise<Employee> =>{
  return new Promise<Employee>((resolve, reject)=>{
    const employee = Employees.find((el) => el.id === id)
    employee != null? resolve(employee) : reject(new Error(`El empleado con id ${id} no existe`))
  })
}

const getSalary = (id: number): Promise<number> =>{
  return new Promise<number>((resolve, reject)=>{
    const salary = Salaries.find((el) => el.id === id)
    salary != null? resolve(salary.salary) : reject(new Error(`No hay salario para el empleado con el id: ${id}`))
  })
}

const id= 1
getEmployee(id).then((employee) => console.log(employee)).catch((error) => console.error(error.message))
getSalary(id).then((salary) => console.log('El salario es de ', salary, "€")).catch((error) => console.error(error.message))

//Promesas en cadena
let name : string
getEmployee(id)
  .then((employee) => {
    console.log(employee)
    name = employee.name
    return getSalary(employee.id)
  })
  .then((salary) =>{
    console.log("El empleado ", name, " tiene un salario de ", salary, "€")
  })
  .catch((error) => console.error(error.message))