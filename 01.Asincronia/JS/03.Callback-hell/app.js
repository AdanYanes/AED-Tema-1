const Employees = [
    {id: 1, name: "Luis"},
    {id: 2, name: "Juan"},
    {id: 3, name: "Carlos"},
]

const Salaries = [
    {id: 1, salary: 1000},
    {id: 2, salary: 2000},
]

const getEmployee = (id, cb) =>{
    const employee = Employees.find((el) => el.id === id)

    if (employee) cb(null, employee.name)
    else cb(new Error(`El empleado con el id: ${id} no existe`))
}

const getSalary = (id, cb) =>{
    const salary = Salaries.find((el) => el.id === id)

    if (salary) cb(null, salary.salary)
    else cb(new Error(`El empleado con el id: ${id} no tiene salario`))
}

const id =3

getEmployee(id, (error, name) =>{
    if(error) console.error(error.message)
    else console.log(`El empleado se llama ${name}`)
})

getSalary(id, (error, salary) =>{
    if(error) console.error(error.message)
    else console.log(`El empleado tiene un salario de ${salary} euros`)
})

getEmployee(id, (error, name) =>{
    if(error) console.error(error.message)
    else{
        getSalary(id, (error, salary) =>{
            if(error) console.error(error.message)
            else console.log(`El empleado se llama ${name} y tiene un salario de ${salary} euros`)
        })
}
})
