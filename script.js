// Obtém os elementos da interface
const botaoA = document.querySelectorAll('.team .botao')[0]; // Botão "Marcar ponto" Time A
const botaoB = document.querySelectorAll('.team .botao')[1]; // Botão "Marcar ponto" Time B
const pontosA = document.querySelectorAll('.pontos')[0]; // Campo de pontos Time A
const pontosB = document.querySelectorAll('.pontos')[1]; // Campo de pontos Time B
const ganhador = document.getElementById('ganha'); // Exibe o ganhador
const final = document.getElementById('final'); // Botão "Finalizar partida"
const reiniciar = document.getElementById('renicio'); // Botão "Reiniciar jogo"
const ponto = document.querySelector('.pontos');
const somFina = document.getElementById('finlSound');
// Variáveis para contar os pontos
let pontosTimeA = 0;
let pontosTimeB = 0;
let jogoFinalizado = false; // Flag para verificar se o jogo foi finalizado

// Função para atualizar o placar de um time
function atualizarPlacar() {
  pontosA.value = pontosTimeA;
  pontosB.value = pontosTimeB;
}

// Evento para Time A
botaoA.addEventListener('click', () => {
  if (!jogoFinalizado) {
    pontosTimeA++;
    atualizarPlacar();
    somFina.currentTime = 0;
    somFina.play();

  }
});

// Evento para Time B
botaoB.addEventListener('click', () => {
  if (!jogoFinalizado) {
    pontosTimeB++;
    atualizarPlacar();
    somFina.currentTime = 0;
    somFina.play();

  }
});

// Evento para finalizar o jogo
final.addEventListener('click', () => {
  jogoFinalizado = true; // Marca que o jogo foi finalizado
  const somFinal = document.getElementById('finalSound');
  somFinal.play();

  // Exibe o vencedor
  if (pontosTimeA > pontosTimeB) {
    ganhador.textContent = "Vencedor: Time A";
  } else if (pontosTimeB > pontosTimeA) {
    ganhador.textContent = "Vencedor: Time B";
  } else {
    ganhador.textContent = "Empate!";
  }
  final.style.display = "none"; // Oculta o botão "Finalizar partida"
  reiniciar.style.display = "block"; // Exibe o botão "Reiniciar jogo"
});

// Função para reiniciar o jogo
reiniciar.addEventListener('click', () => {
  pontosTimeA = 0;
  pontosTimeB = 0;
  ganhador.textContent = "Ganhador:";
  jogoFinalizado = false; // Reinicia o estado do jogo
  final.style.display = "block"; // Exibe o botão "Finalizar partida"
  // O botão "Reiniciar jogo" continuará visível
  atualizarPlacar();
});

ponto.classList.add('pulsar');
setTimeout(() => ponto.classList.remove('pulsar'), 300);

