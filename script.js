import { calcularMedia, definirStatus } from './opc.js';

const totalAlunos = 7;

for (let i = 1; i <= totalAlunos; i++) {

    
    const nota1El = document.querySelector(`.nota1_aluno${i}`);
    const nota2El = document.querySelector(`.nota2_aluno${i}`);
    const nota3El = document.querySelector(`.nota3_aluno${i}`);

    const nota1 = Number(nota1El.textContent);
    const nota2 = Number(nota2El.textContent);
    const nota3 = Number(nota3El.textContent);

    // Calculando média
    const media = calcularMedia(nota1, nota2, nota3);

    const mediaEl = document.querySelector(`.media_aluno${i}`);
    const statusEl = document.querySelector(`.status_aluno${i}`);

    // Mostrando média
    mediaEl.textContent = media.toFixed(2);

    // Definindo status
    definirStatus(media, statusEl);
}


