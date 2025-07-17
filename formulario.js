// Este script é para as páginas de formulário (atendimento.html, tecnico.html)
document.addEventListener('DOMContentLoaded', function() {
    const formDados = document.getElementById('formDados');
    const nomeInput = document.getElementById('name');
    const idadeInput = document.getElementById('age');
    const cidadeInput = document.getElementById('city');
    const scriptGerado = document.getElementById('scriptMake');
    const btnCopiarScript = document.getElementById('btnCopy');
    const btnGerarScript = document.getElementById('btnMake');

    // Funções para manipular a cor do botão de copiar
    function setBtnCopiarColor(state) {
        btnCopiarScript.classList.remove('disponivel', 'copiado');
        if (state === 'disponivel') {
            btnCopiarScript.classList.add('disponivel');
            btnCopiarScript.textContent = 'Copiar Script';
        } else if (state === 'copiado') {
            btnCopiarScript.classList.add('copiado');
            btnCopiarScript.textContent = 'Copiado!';
            setTimeout(() => {
                setBtnCopiarColor('disponivel'); // Volta para disponível após 2 segundos
            }, 2000);
        } else {
            btnCopiarScript.textContent = 'Copiar Script'; // Estado padrão
        }
    }

    // Lógica para gerar o script
    formDados.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário (que recarregaria a página)

        const nome = nomeInput.value.trim();
        const idade = idadeInput.value; // Idade já é number pelo input type
        const cidade = cidadeInput.value.trim();

        if (nome && idade && cidade) {
            const fraseScript = `Olá ${nome}, pelo que vi você tem ${idade} anos de idade e você mora na cidade de ${cidade}.`;
            scriptGerado.textContent = fraseScript;
            btnCopiarScript.disabled = false; // Habilita o botão de copiar
            setBtnCopiarColor('disponivel'); // Define a cor para disponível
        } else {
            scriptGerado.textContent = 'Por favor, preencha todos os campos para gerar o script.';
            btnCopiarScript.disabled = true; // Desabilita o botão se os campos estiverem vazios
            setBtnCopiarColor('copiar'); // Volta para a cor padrão (desabilitado)
        }
    });

    // Lógica para copiar o script
    btnCopiarScript.addEventListener('click', function() {
        const textoParaCopiar = scriptGerado.textContent;
        
        // Usa a API Clipboard para copiar o texto
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                console.log('Script copiado para a área de transferência!');
                setBtnCopiarColor('copiado'); // Muda a cor para "copiado"
            })
            .catch(err => {
                console.error('Erro ao copiar o script: ', err);
                // Fallback para navegadores mais antigos (menos comum hoje)
                const textArea = document.createElement('textarea');
                textArea.value = textoParaCopiar;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    console.log('Script copiado via execCommand!');
                    setBtnCopiarColor('copiado');
                } catch (e) {
                    alert('Não foi possível copiar automaticamente. Por favor, copie o texto manualmente: ' + textoParaCopiar);
                }
                document.body.removeChild(textArea);
            });
    });

    console.log('Script do formulário carregado.');
});