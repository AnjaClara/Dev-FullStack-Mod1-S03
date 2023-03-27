
function Start(){
  var aniversário = document.getElementById('aniversario')
  const d1 = prompt("Digite o dia de hoje no seguinte formato 'EsseAno-mes-dia':");
  const d2 = prompt("Digite o dia do seu aniversário no seguinte formato 'AnoDesejado-mês-dia':");

  if(d1 !== '' && d1 !== null && d2 !== '' && d2 !== null){
    setInterval(()=>{
      // diferença em dias entre as duas datas
      const diffInMs = new Date(d2) - new Date(d1)
      const diffInDays = diffInMs/(1000*60*60*24);
      console.log(diffInDays) 
      if(diffInMs > 0){
        aniversário.innerHTML = `faltam ${diffInDays} dias`;
        console.log(`faltam ${diffInDays} dias`);
      } else{
        aniversário.innerHTML = `feliz aniversário`;
      }
    },3000)
  }else{
    return alert("Campo vazio!!")
  }


}
