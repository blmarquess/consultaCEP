const dataTry = (data) => {
  for (const dado in data) {
    if (document.querySelector('#' + dado)) {
      document.querySelector('#' + dado).value = data[dado];
    }
  }
}

const getData = (cep) => {
  const options = { method: 'GET', mode: 'cors', cache: 'default' }

  fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
    .then((response) => {
      response.json()
        .then((data) => dataTry(data))
    })
    .catch((err) => console.log(`Deu ruim ${err.message}`))
}

const cep = document.querySelector('#cep');
cep.addEventListener('blur', (e) => {
  const cepValue = cep.value.replace(/\D/g, '');
  if (cepValue.lenght !== 8) {
    return getData(cepValue);
  }
  return alert('O CEP informado é invalido, utilize o o faormato 00000-000')
});