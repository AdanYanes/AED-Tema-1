
interface user{
  id: number,
  name: string
}

const getUserById = (id: number, callback: (user: user) => void): void =>{
  const user: user = {
    id,
    name: "Acceso a datos"
  }
  setTimeout(() =>{
    callback(user)
  }, 2000)

}

getUserById(10, (usuario: user) =>{
  console.log(usuario.name)
})