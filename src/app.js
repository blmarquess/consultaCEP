const dataTry = (data) => {
  for (const dado in data) {
    if (document.querySelector('#' + dado)) {
      document.querySelector('#' + dado).value = data[dado];
    }
  }
}

const cep = document.querySelector('#cep');
cep.addEventListener('blur', (e) => {
  const cepValue = cep.value.replace('-', '');
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }
  
  fetch(`https://viacep.com.br/ws/${cepValue}/json/`, options)
    .then((response) => {
      response.json()
      .then((data) => dataTry(data))
    })
    .catch((err) => console.log(`Deu ruim ${err.message}`))
});