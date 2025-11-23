import { mostrarMensagem } from "./messages.js"; 

document.getElementById("formCadastro").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const senha2 = document.getElementById("confirmar_senha").value.trim();
    const msg = document.getElementById("msgRetorno");

    if (senha !== senha2) {
        mostrarMensagem(msg, "erro", "As senhas não coincidem.");
        return;
    }

    try {
        const resposta = await fetch("../../../../backend/login/cadastroUser.php", {
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
            mostrarMensagem(msg, "sucesso", dados.mensagem);
            setTimeout(() => {
                window.location.href = "./loginpage.html";
            }, 1200);

        } else {
            mostrarMensagem(msg, "erro", dados.mensagem);
        }

    } catch (erro) {
        mostrarMensagem(msg, "erro", "Erro ao conectar com o servidor.");
        console.error(erro);
    }
});
