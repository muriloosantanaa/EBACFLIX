const ativadorToast = document.getElementById('btn-notificacoes');
const mensagem = document.getElementById('mensagens')

if (ativadorToast) {
    ativadorToast.addEventListener('click', function() {
        const toast = new bootstrap.Toast(mensagem);
        toast.show();
    })
}

document.addEventListener('DOMContentLoaded', function() {
    const modalExemplo = new bootstrap.Modal('#exemplo-modal');
    setTimeout(function() {
        modalExemplo.show();
    }, 1000);
})