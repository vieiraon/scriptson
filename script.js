document.addEventListener('DOMContentLoaded', function() {
    const btnAtendimento = document.getElementById('btnAtendimento');
    const btnTecnico = document.getElementById('btnTecnico');

    if (btnAtendimento) {
        btnAtendimento.addEventListener('click', function() {
            window.location.href = 'atendimento.html'; // Redireciona para a página de atendimento
        });
    }

    if (btnTecnico) {
        btnTecnico.addEventListener('click', function() {
            window.location.href = 'tecnico.html'; // Redireciona para a página de técnico
        });
    }

    console.log('Script da página inicial carregado.');
});