const SeuNumero = prompt('Digite seu número');
const SuaMensagem = prompt('Digite sua mensagem');
const link = `api.whatsapp.com/send?phone=${SeuNumero}&text=${SuaMensagem}`

alert(`${link}`);
console.log(link);

document.getElementById('app').innerHTML = `<a href="${link}">link whatsapp</a>`
