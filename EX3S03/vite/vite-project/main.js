import './style.css'
import javascriptLogo from './javascript.svg'
import users from './database/users.json'
console.log(users);

let userList = users.map((user)=>`<li>${user.username}</li>`)

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello devSearch</h1>
    <ul id='list'>
    ${userList}
    </ul>
    <input id='search' placeholder='busque seu usuario'></input>
    <button onclick={{handleSearch()}}>Buscar</button>
    <button onclick={{handleClean()}}>Limpar</button>
  </div>
`

let search = document.querySelector('#search');

window.handleSearch=() =>{
  const newUserList = users.filter((user)=>{
    if(user.username == search.value){
      return user;
    }
  });

  const listHTML = document.querySelector("#list");
  let newHTMLUserList = newUserList.map((user)=> `<li>${user.username}</li>`);
  if (newHTMLUserList.length > 0){
    listHTML.innerHTML = newHTMLUserList;
  }else{
    listHTML.innerHTML = "nenhum usuario encontrado";
  }
};

window.handleClean = () => {
  const listHTML = document.querySelector("#list");
  listHTML.innerHTML = users.map(
    (user) => `<ul><li id>${user.username}</li></ul>`
  );
};

// setupCounter(document.querySelector('#counter'))
