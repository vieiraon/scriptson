const titulo = document.getElementById('t1');
const paragrafo = document.getElementById('p1');
const botao = document.getElementById('b1');
const corpoDaPagina = document.body;
let clicado = false;

botao.addEventListener('click', function() {
    if (clicado === false) {
        titulo.textContent = 'Parabéns, Você Interagiu!';
        paragrafo.textContent = 'O JavaScript modificou este conteúdo e a cor de fundo!';        corpoDaPagina.style.backgroundColor = '#d1ecf1';
        botao.textContent = 'Voltar ao Normal';
        clicado = true;
    } else {
        titulo.textContent = 'Olá, Seja Bem-Vindo!';
        paragrafo.textContent = 'Este é um site simples para demonstrar a interação com JavaScript.';
        corpoDaPagina.style.backgroundColor = '#f4f4f4';
        botao.textContent = 'Clique Para Mudar!';
        clicado = false;
    }
});

console.log('Script.js carregado com sucesso!');