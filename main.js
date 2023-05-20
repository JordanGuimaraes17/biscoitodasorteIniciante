//Variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('.btnTry')
const btnReset = document.querySelector('#btnReset')
let phrases = [
  'Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.',

  'Pois tudo o que foi escrito no passado foi escrito para nos ensinar, de forma que, por meio da perseverança e do bom ânimo procedentes das Escrituras, mantenhamos a nossa esperança.',

  'E conhecereis a verdade, e a verdade vos libertará.',

  'Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio.',

  'O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.',

  'Não andeis ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, com ação de graças, sejam as vossas petições conhecidas diante de Deus.',

  'Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor teu Deus te dá.',

  'Pedi, e dar-se-vos-á; buscai e achareis; batei, e abrir-se-vos-á.',

  'O Senhor é o meu pastor; nada me faltará.',

  'Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.'
]

//Eventos
document.addEventListener('keydown', keydown) //O evento "keydown" é acionado no momento exato em que a tecla é pressionada
btnTry.addEventListener('click', toggleScrenn)
btnReset.addEventListener('click', toggleScrenn)

// Funções e call backs

function keydown(e) {
  if (e.key === 'Enter') {
    /* função ou call back keydown(e)
    e.key refere-se à propriedade key do objeto de evento e. O objeto de evento é passado como argumento para a função keydown.
    A propriedade key contém a informação sobre a tecla pressionada durante o evento. No caso específico da função fornecida, o código verifica se a tecla pressionada é a tecla "Enter".*/

    let random = Math.floor(Math.random() * phrases.length)
    let randomPhrases = phrases[random]
    screen2.querySelector('p').textContent = randomPhrases
    toggleScrenn()
  }
}
function toggleScrenn() {
  /* função ou call back toggleScrenn

A função toggleScreen() é chamada quando o botão btnTry é clicado. Essa função alterna a exibição das telas screen1 e screen2, adicionando ou removendo a classe "hide" nesses elementos.
screen1.classList.toggle('hide') - Esse trecho de código adiciona ou remove a classe "hide" do elemento screen1. Se a classe "hide" estiver presente, ela será removida; caso contrário, será adicionada, alternando a visibilidade da screen1.

screen2.classList.toggle('hide') - Esse trecho de código faz o mesmo que o anterior, mas com o elemento screen2. Ele adiciona ou remove a classe "hide" da screen2, alternando sua visibilidade.

if (!screen2.classList.contains('hide')) - Esse trecho de código verifica se a classe "hide" está presente no elemento screen2. O operador de negação ! é usado para inverter o resultado. Se a classe "hide" não estiver presente (ou seja, a screen2 não estiver oculta), o código dentro do if será executado.
*/

  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
  if (!screen2.classList.contains('hide')) {
    let random = Math.floor(Math.random() * phrases.length)
    let randomPhrase = phrases[random]
    screen2.querySelector('p').textContent = randomPhrase
    /*Dentro do bloco if
     o código seleciona uma frase aleatória do array phrases. A variável random é gerada usando Math.floor(Math.random() * phrases.length), que retorna um número inteiro aleatório entre 0 (incluído) e o comprimento do array phrases (excluído).

     A frase aleatória é armazenada na variável randomPhrase.

     Em seguida, o código atualiza o conteúdo do elemento <p> dentro da screen2 com a frase aleatória, usando screen2.querySelector('p').textContent = randomPhrase. A propriedade textContent é usada para definir o texto exibido no elemento.

     Por fim, a função toggleScreen() é chamada para alternar a exibição das telas screen1 e screen2.

     Em resumo, quando a tecla "Enter" é pressionada, a função keydown() seleciona uma frase aleatória e a exibe na screen2, atualizando o conteúdo do elemento <p>. Em seguida, a função toggleScreen() é chamada para alternar a exibição das telas.

*/
  }
}
