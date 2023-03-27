
async function search(){
  const usuario = prompt('Digite um usuario do GitHub')
  const response = await fetch(`https://api.github.com/users/${usuario}`)
  const data = await response.json()
  console.log(data)
  document.getElementById('name').innerHTML = `Nome: ${data?.name} `
  document.getElementById('img').src = data?.avatar_url
  document.getElementById('login').innerHTML = `${data?.login}`
  document.getElementById('id').innerHTML = `Id: ${data?.id}`
  document.getElementById('public_repos').innerHTML = `Repositórios: ${data?.public_repos}`

}

search();