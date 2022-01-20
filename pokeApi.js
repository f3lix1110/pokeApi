fetch('https://pokeapi.co/api/v2/pokemon/6/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('pokemon1')
  element.innerHTML = 
    `<p> Nombre: ${pokemon.name}<p>
    <img src='${pokemon.sprites.front_default}'>
    <p>Altura: ${pokemon.height}<p>
    <p>Peso: ${pokemon.weight}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/384/')
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('pokemon2')
  element2.innerHTML = `<p>${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p>${pokemon2.height}<p>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))


fetch('https://pokeapi.co/api/v2/pokemon/350/')
.then(responsen => responsen.json())
.then(pokemon3 => {
  let element3 = document.getElementById('pokemon3')
  element3.innerHTML = `<p>${pokemon3.name}<p>
  <img src='${pokemon3.sprites.front_default}'><p>${pokemon3.height}<p>`;
  console.log(pokemon3)
})
.catch(err=>console.log(err))