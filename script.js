const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O cyberbullying é a violência virtual que ocorre geralmente com as pessoas tímidas e indefesas, ou simplesmente por não caírem na simpatia das mesmas. Como podemos evitá-lo",
        alternativas: [
            {
                texto: "Utilizando palestras para prevenir o cyberbullying nas escolas.",
                afirmacao: "Você é uma pessoa reflexiva e busca aprendizado e conhecimento.",
                "Você usa o seu pensamento crítico e o desejo de aprender para propor palestras escolares que combatem a violência virtual."
            },
            {
                texto:  "Prestando atenção aos sinais de cyberbullying nas escolas.",
                afirmacao: "Você é uma pessoa observadora, pois se preocupa com o bem estar dos seus alunos.",
                "Quem se importa de verdade com os alunos está sempre vigiando. O seu perfil observador é a chave para detectar o cyberbullying antes que ele cause danos."

                         
            }    
           
        ]
    },
    {
       
            enunciado: "As fontes renováveis de energia são aquelas formas de produção de energia em que suas fontes são capazes de manter-se disponíveis durante um longo prazo, contando com recursos que se regeneram ou que se mantêm ativos permanentemente. Com base nisso, temos a energia geotérmica, que consiste em utilizar o calor manifestado em áreas próximas à superfície. Qual a sua opinião sobre esse modelo de energia renovável?",
            alternativas: [
                {
                    texto: "A energia geotérmica precisa ser mais explorada visto que utiliza o calor interno da terra, pois não depende do clima e é inesgotável.",
                        afirmacao:[ "Você demonstra um perfil  de pesquisador e inovador que busca por meio da inovação soluções para o meio ambiente e sustentabilidade das gerações posteriores.",
                     "Como um pesquisador focado no futuro, você enxerga na energia geotérmica uma solução inovadora e ecológica, já que ela aproveita o calor constante da Terra independente do clima."
                        ]
                    },
                {
                    texto:  "Seria interessante explorar primeiramente fontes renováveis exotérmicas, em segundo plano utilizar a energia geotérmica apesar dos custos elevados de explorações e possibilidades de contaminação de rios. ",
                    afirmacao: "Você é uma pessoa que dá ênfase em priorizar os recursos disponíveis, pensando no meio ambiente e sem descartar o viés econômico.",
                          "Pensando no bolso e no planeta, você escolhe caminhos mais seguros e acessíveis antes de investir na geotermia, mostrando que sabe balancear sustentabilidade com viabilidade financeira."
                }    
               
            ]
        },
        {
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo.",
                    "Você entende que a autoestima dita o ritmo dos nossos dias e, por isso, busca constantemente o autoconhecimento para enxergar a vida de forma mais leve e positiva."
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional.",
                    "Como a sua autoestima varia às vezes, você nota o impacto disso na sua rotina. Isso reflete um momento de amadurecimento, onde você busca se entender melhor e priorizar sua saúde mental."
                }    
               
            ]
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function aleatorio(lista) {
    const posicao = Math.random()* lista.length;
}
function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}