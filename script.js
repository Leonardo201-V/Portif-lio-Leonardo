// Validação de formulario //
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');  // CORRIGIDO: era "from"
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validações //
        // Nome //
        if (nome == '') {
            alert('O campo nome deve ser preenchido');
            document.getElementById('nome').focus();
            return;
        }
        if (nome.length < 3) {
            alert('O nome deve conter ao menos 3 caracteres');
            document.getElementById('nome').focus();
            return;
        }

        // Telefone //
        if (telefone === '') {
            alert('O campo telefone deve ser preenchido');
            document.getElementById('telefone').focus();
            return;
        }
        const telefoneLimpo = telefone.replace(/\D/g, '');
        if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
            alert('Telefone invalido. Use o formato (DD) 99999-9999');
            document.getElementById('telefone').focus();
            return;
        }

        // Email //
        if (email === '') {
            alert('Por favor, preencha o campo E-mail.');
            document.getElementById('email').focus();
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('E-mail invalido. Use o formato: nome@email.com');
            document.getElementById('email').focus();
            return;
        }

        // Mensagem //
        if (mensagem === '') {
            alert('Por favor, preencha o campo Mensagem.');
            document.getElementById('mensagem').focus();
            return;
        }
        if (mensagem.length < 10) {
            alert('A mensagem deve ter pelo menos 10 caracteres.');
            document.getElementById('mensagem').focus();
            return;
        }

        // Confirmação de envio //
        alert('Mensagem enviada com sucesso.');
        form.reset();
    });
});