
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;
//Função para definir o tamanho da tela de jogo
function ajustaTamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoTela()

//Função para decrementar o tempo do cronometro
let cronometro = setInterval(function() {
    tempo--;

    if (tempo<0) {
        clearInterval(cronometro);
        window.location.href = 'win.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
},1000);

//Cria um elemento img dentro do body e adiciona imagens
function criarProfessor() {
    //Se ja existir uma figura, ele remove ela e adiciona uma nova
    if(document.getElementById('professor')) {
        document.getElementById('professor').remove();
        //controla se ainda tem vidas suficientes, se o contador for maior que 3, game over.
        if(vidas>3) {
            window.location.href = 'game-over.html'
        }
        //se tiver vidas mas não clicar a tempos, troca a iamgem de coração cheio por um vazio e incrementa a variável vidas
        document.getElementById('vida'+vidas).src = './imagens/coracao_vazio.png';
        vidas++;
    }

    //Multiplica um número randômico pela largura e altura da página para posicionar a imagem
    let posX = Math.floor(Math.random() * largura) - 90;
    let posY = Math.floor(Math.random() * altura) - 90;

    //Verifica se a posição não é menor que 0, pois se for a imagem aparece fora da tela
    posX = posX < 0 ? 0 : posX;
    posY = posY < 0 ? 0 : posY;

    //cria o elemento img
    let professor = document.createElement('img');
    //de acordo com o número seleciona uma imagem diferente
    let aux = Math.floor(Math.random() * 4);
    if (aux == 0) {
        professor.src = 'imagens/edecio.png';
    } else if (aux == 1) {
        professor.src = 'imagens/cv.png';
    } else if (aux == 2) {
        professor.src = 'imagens/angelo.png';
    } else if (aux == 3) {
        professor.src = 'imagens/gladimir.png';
    }
    //troca a classe de acordo com a função tamanho
    professor.className = tamanho();
    //adiciona um estilo ao professor com a posição no eixo x
    professor.style.left = posX + 'px';
    //adiciona um estilo ao professor com a posição no eixo y
    professor.style.top = posY + 'px';
    //adiciona um estilo ao professor com a posição absoluta
    professor.style.position = 'absolute';
    //Adiciona um id ao professor
    professor.id = 'professor'
    //Função para remover o professor caso seja clicado
    professor.onclick = function() {
        professor.remove();
    }

    //cria o filho professor dentro do body
    document.body.appendChild(professor);

}
//chama a função para criar professor
criarProfessor();
//define um tamanho para a imagem de acordo com o número sorteado e aplica alguma classe especificada no arquivo estilo.css
function tamanho() {
    let aux = Math.floor(Math.random() * 3);
    if (aux == 0) {
        return 'tamanho1';
    } else if (aux == 1) {
        return 'tamanho2';
    } else if (aux == 2) {
        return 'tamanho3';
    }
}

//funcao para rodar a funcão professor várias vezes a cada 1 segundo
setInterval(function () {
    criarProfessor();
}, 1500);





