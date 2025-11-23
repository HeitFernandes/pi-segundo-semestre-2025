
document.getElementById("formLogin").addEventListener("submit", async function (e) {
    e.preventDefault();

    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msg = document.getElementById("msgRetorno");
    const btn = document.getElementById("btnLogin");

    btn.disabled = true;
    btn.innerText = "Entrando...";

    try {
        const resposta = await fetch("../../../../backend/login/loginUser.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                login: login,
                senha: senha
            })
        });

        const dados = await resposta.json();

        if (dados.success) {
             msg.innerHTML = `<span class="text-success fw-bold">${dados.message}</span>`;
    
          setTimeout(() => {
        window.location.href = "../dashboard/dashboard.html"; 
    }, 1200);

    } else {
    msg.innerHTML = `<span class="text-danger fw-bold">${dados.message}</span>`;
    }


    } catch (erro) {
        msg.innerHTML = `<span class="text-danger fw-bold">Erro ao conectar ao servidor.</span>`;
        console.error(erro);

    } finally {
        btn.disabled = false;
        btn.innerText = "Entrar";
    }
});
