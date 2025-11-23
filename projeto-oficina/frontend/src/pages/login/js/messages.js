export function mostrarMensagem(elemento, tipo, texto) {
    elemento.className = ""; 

    if (tipo === "sucesso") {
        elemento.classList.add("text-success", "fw-bold");
    } else if (tipo === "erro") {
        elemento.classList.add("text-danger", "fw-bold");
    }

    elemento.textContent = texto;
}
