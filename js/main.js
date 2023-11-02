const cepInput = document.querySelector('#cep');
const ruaInput = document.querySelector('#street');
const numeroInput = document.querySelector('#number');
const bairroInput = document.querySelector('#neighborhood');
const estadoInput = document.querySelector('#state');
const cidadeInput = document.querySelector('#city');

cepInput.addEventListener('blur', async () => {
  const cep = cepInput.value.replace('-', '');
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  
  try {
    const res = await fetch(url);
    const endereco = await res.json();
    if (endereco.erro) {
      document.getElementById('cepError').classList.remove('hidden');
    } else {
        document.getElementById('cepError').classList.add('hidden');
        ruaInput.value = endereco.logradouro;
        bairroInput.value = endereco.bairro;
        cidadeInput.value = endereco.localidade;
        estadoInput.value = endereco.uf;
        numeroInput.focus();
    }
} catch (erro) {
    document.getElementById('cepError').classList.remove('hidden');
    console.error(erro);
}
});
