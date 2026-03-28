export function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

export function definirStatus(media, elementoStatus) {
    const linha = elementoStatus.parentElement;

    // LIMPA estilos antes (IMPORTANTE)
    linha.style.color = "";
    linha.style.fontWeight = "";
    linha.style.fontSize = "";
    linha.style.backgroundColor = "";

    const colunas = linha.querySelectorAll("td");
    colunas.forEach(td => {
        td.style.border = "";
    });

    if (media < 4) {
        // REPROVADO
        elementoStatus.textContent = "REPROVADO";

        linha.style.color = "red";
        linha.style.fontWeight = "bold";

    } else if (media < 6) {
        // RECUPERAÇÃO
        elementoStatus.textContent = "RECUPERAÇÃO";

        linha.style.fontSize = "15px";
        linha.style.backgroundColor = "lightgray";

    } else {
        // APROVADO
        elementoStatus.textContent = "APROVADO";

        colunas.forEach(td => {
            td.style.border = "2px solid green";
        });
    }
}