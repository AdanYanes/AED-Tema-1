
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

async function getUserInfo(id: number): Promise<string>{
  try {
    const employee = await getEmployee(id)
    const salary = await getSalary(id)
    return `El salario del empleado ${employee.name} es de ${salary}€`
  } catch (error){
    if (error instanceof Error) throw new Error(error.message)
    else throw new Error('Error desconocido')
  
  }
}

const id= 1

getUserInfo(id).then((msg) => console.log(msg)).catch((err) => console.error(err.message))