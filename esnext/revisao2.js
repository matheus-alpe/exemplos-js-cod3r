// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro Default
function log(texto = 'Texto default') {
  console.log(texto)
}
log(null)
log(undefined)
log()
log('Não é o default')

// Operador Rest
function total(...numeros){
  let total = 0
  numeros.forEach(n => total += n)
  return total
}

console.log(total(2, 3, 4, 5))