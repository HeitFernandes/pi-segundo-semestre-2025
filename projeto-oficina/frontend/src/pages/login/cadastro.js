document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar_senha").value;

    const msg = document.getElementById("msgRetorno");
    msg.innerHTML = `<span class="text-secondary">Processando...</span>`;

    if (senha !== confirmarSenha) {
        msg.innerHTML = `<span class="text-danger">As senhas não coincidem.</span>`;
        return;
    }

    try {
        const resposta = await fetch("cadastroUser.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                FUN_NOME: nome,
                FUN_LOGIN: login,
                FUN_SENHA: senha
            })
        });

        const dados = await resposta.json();

        if (dados.success) {
            msg.innerHTML = `<span class="text-success">${dados.mensagem}</span>`;
            setTimeout(() => window.location.href = "loginpage.html", 1500);
        } else {
            msg.innerHTML = `<span class="text-danger">${dados.mensagem}</span>`;
        }

    } catch (error) {
        msg.innerHTML = `<span class="text-danger">Erro ao conectar com o servidor.</span>`;
    }
});
