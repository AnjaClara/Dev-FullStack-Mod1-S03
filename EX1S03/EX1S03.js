import {users} from './users.js';
let usuario = document.getElementById('usuario');
let infos = document.getElementById('infos');


function userName(){
  const user_name = prompt('Digite o username: ');
  const filteredUsers = users.filter(user => user.username === user_name);

  if (filteredUsers.length > 0) {
    const infosJSON = JSON.stringify(filteredUsers);
    usuario.innerText = ("Usuários encontrados:");
    infos.innerText = (infosJSON);
    console.log(filteredUsers);
  } else {
    console.log("Nenhum usuário encontrado com o username " + user_name);
  }

}

userName()



