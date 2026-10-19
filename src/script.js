

const campoCidade = document.getElementById('campo-cidade');
const botaoConsultar = document.getElementById('botao-consultar');
const mensagem = document.getElementById('mensagem');
const resultadoCidade = document.getElementById('resultado-cidade');
const resultadoTemperatura = document.getElementById('resultado-temperatura');
const resultadoCondicao = document.getElementById('resultado-condicao');

async function consultar() {
  mensagem.textContent = '';

  try {
    const clima = await buscarClima(campoCidade.value);

    resultadoCidade.textContent = clima.cidade;
    resultadoTemperatura.textContent = `${clima.temperatura} °C`;
    resultadoCondicao.textContent = clima.condicao;
  } catch (erro) {
    mensagem.textContent = erro.message;
  }
}

botaoConsultar.addEventListener('click', consultar);
