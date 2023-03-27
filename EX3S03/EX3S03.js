// função que busca a tarefa existente na lista
// funçao que altera um item da lista
// funçao que deleta um item da lita
// funçao que adiciona um item na lista
var tarefa = ["arrumar o quarto", "estudar FullStack", "faculdade", "academia"];
var list = document.getElementById("list");

function lista(){
  tarefa.forEach((time)=> {
    // cria um novo elemento chamado li (linha da lista)
      let li = document.createElement("li");
    // nomeio cada elemento html com os nomes dir times
      li.innerText = time;
    // adiciona na linha do html cada elemento que foi criado
      list.appendChild(li);
    });
}

lista();

function buttonAdd(){
  let addTarefa = document.getElementById('addTarefa');
  const novatarefa = prompt("Escreva a tarefa que gostaria de adicionar: ")

  if(novatarefa != '' && novatarefa != null){
    tarefa.push(novatarefa); 
    list.innerHTML = ''; 
    lista(); 
  } else {
    addTarefa.innerHTML = "<p style='color: red;'>Não se pode inserir valores vazios</p>";
  }
}

function buttonDelete(){
  let deletaTarefa = document.getElementById('deletaTarefa');
  const deletaItem = prompt("Escreva o nome da tarefa que gostaria de deletar: ");

  if(deletaItem !== null && deletaItem !== ''){
    const index = tarefa.indexOf(deletaItem); 
    if(index !== -1){
      tarefa.splice(index, 1);
      list.removeChild(list.childNodes[index]); 
    } else {
      deletaTarefa.innerHTML = "<p style='color: red;'>Tarefa não encontrada.</p>";
    }
  } else {
    deletaTarefa.innerHTML = "<p style='color: red;'>Não se pode inserir valores vazios</p>";
  }
}

function buttonSearch(){
  let buscaTarefa = document.getElementById('buscaTarefa');
  const procuraItem = prompt("Escreva o nome da tarefa que gostaria de buscar: ");

  if(procuraItem !== null && procuraItem !== ''){
    const buscaItem = tarefa.find((tarefa)=>{
      return tarefa === procuraItem;
    })
    if (buscaItem) {
      let newli = document.createElement("li");
      newli.innerText = buscaItem;
      list.innerHTML = ''; 
      list.appendChild(newli);
    } else {
      buscaTarefa.innerHTML = "<p style='color: red;'>Tarefa não encontrada.</p>";
    }
  } else {
    buscaTarefa.innerHTML = "<p style='color: red;'>Valor inválido. Insira um nome válido.</p>";
  }
}

function buttonChange(){
  let alteraTarefa = document.getElementById('alteraTarefa');
  const editaItem = prompt("Escreva o nome da tarefa que gostaria de editar: ");

  if(editaItem !== null && editaItem !== ''){
    const index = tarefa.indexOf(editaItem); 
    console.log(index)
    if(index !== -1){
      const novaTarefa = prompt("Escreva a nova tarefa: ");
      if(novaTarefa !== null && novaTarefa !== ''){
        tarefa.splice(index, 1, novaTarefa);
        list.innerHTML = ''; 
        lista(); 
      } else {
        alteraTarefa.innerHTML = "<p style='color: red;'>Não se pode inserir valores vazios</p>";
      }
    } else {
      alteraTarefa.innerHTML = "<p style='color: red;'>Tarefa não encontrada.</p>";
    }
  } else {
    alteraTarefa.innerHTML = "<p style='color: red;'>Valor inválido. Insira um nome válido.</p>";
  }
}


