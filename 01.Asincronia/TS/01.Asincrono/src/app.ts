function app(): void {
  console.log('inicio')
  setTimeout(() => {
    console.log('Despues de 4 segudnos')
  }, 4000)

  setTimeout(() => {
    console.log('Despues de 0 segundos')
  }, 0)

  console.log('Final')
}

app()
