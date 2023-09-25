const getUserById = (id, callback) => {
    const user = {
        id,
        name: "Acceso a datos",
    }
    if (id === 10) callback(new Error("El usuario 10 no existe"))
    else{
        setTimeout(() =>{
            callback(null, user)
        }, 2000)
    }
}

getUserById(4, (error, user) =>{
    if (error){
        console.log(error.message)
    }else{
        console.log(user)
    }
})