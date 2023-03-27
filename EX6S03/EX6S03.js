async function search(){
  const numPersonagem = prompt('Digite o número do personagem de 1-800')
  const response = await fetch(`https://rickandmortyapi.com/api/character/${numPersonagem}`)
  const data = await response.json()
  console.log(data)
  document.getElementById('name').innerHTML = `${data?.id} - ${data?.name} `
  document.getElementById('img').src = data?.image
  document.getElementById('gender').innerHTML = `Gender: ${data?.gender}`
  document.getElementById('species').innerHTML = `Species: ${data?.species}`
  document.getElementById('status').innerHTML = `Status: ${data?.status}`

}

search();