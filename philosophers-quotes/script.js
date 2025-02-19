// script.js

const quotes = [
    { text: "A vida não examinada não vale a pena ser vivida.", author: "Sócrates", contribution: "Filósofo grego, um dos fundadores da filosofia ocidental." },
    { text: "Conhece-te a ti mesmo.", author: "Sócrates", contribution: "Desenvolveu o método socrático de questionamento." },
    { text: "O homem é a medida de todas as coisas.", author: "Protágoras", contribution: "Filósofo pré-socrático, um dos sofistas." },
    { text: "A felicidade depende de nós mesmos.", author: "Aristóteles", contribution: "Fundador da filosofia aristotélica, influenciando diversas áreas do conhecimento." },
    { text: "Penso, logo existo.", author: "René Descartes", contribution: "Filósofo francês, um dos fundadores da filosofia moderna." },
    { text: "O único conhecimento verdadeiro é saber que nada sabemos.", author: "Sócrates", contribution: "Filósofo que destacou a importância do autoconhecimento e da ética." },
    { text: "O que sei é que nada sei.", author: "Sócrates", contribution: "Fundador da filosofia ocidental e da teoria do conhecimento." },
    { text: "A dúvida é o princípio da sabedoria.", author: "Aristóteles", contribution: "Estabeleceu as bases da lógica e da ética." },
    { text: "Ser é ser percebido.", author: "George Berkeley", contribution: "Filósofo idealista irlandês que desenvolveu a teoria do imaterialismo." },
    { text: "O homem nasce livre e em todo lugar se encontra acorrentado.", author: "Jean-Jacques Rousseau", contribution: "Filósofo iluminista e autor do conceito de 'contrato social'." },
    { text: "A liberdade é a única coisa que você não pode ter a menos que a dê para os outros.", author: "William Blake", contribution: "Poeta e filósofo inglês que abordou a liberdade e a opressão." },
    { text: "Eu sou aquilo que sou, e tu és aquilo que tu és.", author: "Friedrich Nietzsche", contribution: "Filósofo alemão conhecido por suas ideias sobre o super-homem e a vontade de poder." },
    { text: "O homem é a medida de todas as coisas.", author: "Protágoras", contribution: "Sofista grego, um dos primeiros a explorar a relatividade do conhecimento." },
    { text: "O que podemos saber é mais importante do que o que podemos fazer.", author: "Immanuel Kant", contribution: "Filósofo alemão, fundou a filosofia crítica e a ética do dever." },
    { text: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.", author: "Albert Einstein", contribution: "Físico teórico, mas também um grande pensador sobre ciência e filosofia." },
    { text: "A verdade é a primeira vítima da guerra.", author: "Hiram Johnson", contribution: "Político americano que refletiu sobre as verdades esquecidas em tempos de guerra." },
    { text: "A ignorância é a raiz de todos os males.", author: "Plato", contribution: "Filósofo grego e aluno de Sócrates, fundou a Academia de Atenas." },
    { text: "Eu não sou nada. Nunca fui nada. Não posso querer ser nada. À parte isso, tenho em mim todos os sonhos do mundo.", author: "Fernando Pessoa", contribution: "Poeta e filósofo português, um dos maiores escritores da língua portuguesa." },
    { text: "Se você não quer ser criticado, não faça nada, não diga nada, não seja nada.", author: "Aristóteles", contribution: "Filósofo grego que abordou ética, política e metafísica." },
    { text: "O que sabemos é uma gota, o que ignoramos é um oceano.", author: "Isaac Newton", contribution: "Físico e matemático, formulou as leis do movimento e a lei da gravitação universal." },
    { text: "Tudo que é necessário para o triunfo do mal é que os homens bons não façam nada.", author: "Edmund Burke", contribution: "Filósofo político irlandês, considerado um dos fundadores do conservadorismo." },
    { text: "A filosofia começa com a admiração.", author: "Platão", contribution: "Filósofo grego, aluno de Sócrates e professor de Aristóteles." },
    { text: "O verdadeiro conhecimento vem da experiência.", author: "Aristóteles", contribution: "Desenvolveu a lógica e a teoria da causalidade." },
    { text: "O medo é o caminho para o lado negro. O medo leva à raiva, a raiva leva ao ódio, o ódio leva ao sofrimento.", author: "Yoda", contribution: "Personagem fictício da saga Star Wars, com sabedoria filosófica." },
    { text: "A vida sem reflexão não vale a pena ser vivida.", author: "Sócrates", contribution: "Filósofo grego, importante na fundação da filosofia ocidental." },
    { text: "Não podemos ensinar nada a ninguém. Só podemos ajudá-los a encontrar a resposta dentro de si mesmos.", author: "Galileu Galilei", contribution: "Cientista e filósofo italiano, um dos pais da ciência moderna." },
    { text: "Eu sou o que sou porque sou o que fui. O que serei depende do que sou agora.", author: "Albert Einstein", contribution: "Físico teórico que formulou a teoria da relatividade." },
    { text: "A vida é realmente simples, mas insisitimos em torná-la complicada.", author: "Confúcio", contribution: "Filósofo chinês, fundador do confucionismo e ensinamentos morais." },
    { text: "A felicidade é apenas uma ilusão, e nossa busca por ela é o que nos dá um propósito.", author: "Jean-Paul Sartre", contribution: "Filósofo existencialista francês." },
    { text: "O verdadeiro sábio é aquele que conhece seus próprios limites.", author: "Confúcio", contribution: "Filósofo chinês que valorizou a moralidade e a educação." },
    { text: "O conhecimento é o poder.", author: "Francis Bacon", contribution: "Filósofo e cientista inglês, pai do empirismo." },
    { text: "A felicidade é um estado de espírito, não um estado de riqueza.", author: "Aristóteles", contribution: "Filósofo grego que escreveu sobre ética e política." },
    { text: "Ser é ser percebido.", author: "George Berkeley", contribution: "Filósofo irlandês, principal figura do idealismo." },
    { text: "O caráter é mais importante do que a inteligência.", author: "Warren Buffett", contribution: "Empresário e investidor, conhecido por sua sabedoria em negócios." },
    { text: "Se você quer ser feliz, seja.", author: "Lev Tolstói", contribution: "Escritor russo e filósofo moral." },
    { text: "Apenas aqueles que são capazes de sacrificar o prazer momentâneo por uma causa maior sabem o que é felicidade.", author: "Friedrich Nietzsche", contribution: "Filósofo alemão que desenvolveu conceitos sobre a vontade de poder e o super-homem." },
    { text: "Nada é permanente, exceto a mudança.", author: "Heráclito", contribution: "Filósofo grego que acreditava no fluxo constante da realidade." },
    { text: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", author: "Nelson Mandela", contribution: "Líder sul-africano e filósofo político." },
    { text: "Eu não sou um homem, sou um universo em processo.", author: "Heráclito", contribution: "Filósofo pré-socrático com foco na transformação contínua da realidade." },
    { text: "Quem não ama a liberdade, não merece a sua existência.", author: "Jean-Paul Sartre", contribution: "Filósofo existencialista que desenvolveu a teoria de que a existência precede a essência." },
    { text: "As coisas mais essenciais são também as mais simples.", author: "Albert Camus", contribution: "Filósofo e escritor francês, um dos maiores pensadores do existencialismo e absurdismo." },
    { text: "No meio do inverno, finalmente aprendi que havia dentro de mim um verão invencível.", author: "Albert Camus", contribution: "Filósofo francês, muito influente no campo da filosofia existencialista e absurdista." },
    { text: "A única maneira de lidar com esse mundo sem liberdade é se tornar tão absolutamente livre que sua própria existência é um ato de rebeldia.", author: "Albert Camus", contribution: "Filósofo e escritor francês." },
    { text: "A revolta é a condição humana em sua mais alta forma.", author: "Albert Camus", contribution: "Pensador que discutiu o absurdo da vida humana." },
    { text: "A vida não é uma questão de se viver, mas de se sentir.", author: "Albert Camus", contribution: "Reflexões sobre o sentido da vida e a busca pelo significado." },
    { text: "O homem é o único ser que se recusa a ser o que é.", author: "Albert Camus", contribution: "Pensador que abordou a angústia existencial e a busca pela liberdade." },
    { text: "A solidão é a companhia mais fiel.", author: "Albert Camus", contribution: "Filósofo e escritor francês que analisou a condição humana em seu isolamento." },
    { text: "A liberdade, por sua vez, é um direito que se conquista. A tarefa de ser livre é a mais difícil e dolorosa.", author: "Simone de Beauvoir", contribution: "Filósofa e escritora, uma das principais figuras do existencialismo." },
    { text: "A moralidade é a melhor maneira de esconder a falta de coragem.", author: "Albert Camus", contribution: "Filósofo e escritor francês que discutiu a moral em tempos de crise." },
    { text: "A morte é, sem dúvida, uma das mais importantes questões da filosofia.", author: "Albert Camus", contribution: "Filósofo e escritor que tratou da vida e da morte no contexto existencialista." },
    { text: "A luta pela liberdade é o motor da vida humana.", author: "Karl Marx", contribution: "Filósofo e economista, criador do materialismo histórico." },
    { text: "A natureza do homem é o que ele escolhe fazer dela.", author: "Jean-Paul Sartre", contribution: "Filósofo existencialista que desenvolveu a teoria de que a existência precede a essência." },
    { text: "As coisas mais essenciais são também as mais simples.", author: "Albert Camus", contribution: "Filósofo que refletiu sobre a vida simples e a busca pelo sentido." },
    { text: "Você só pode ser livre se realmente desejar a liberdade, mesmo que isso signifique se rebelar contra o próprio sistema que te cerca.", author: "Albert Camus", contribution: "Pensador do existencialismo e absurdismo." },
    { text: "O absurdo nasce do confronto entre o desejo humano de encontrar significado e o silêncio do universo.", author: "Albert Camus", contribution: "Escritor e filósofo francês que discutiu a natureza absurda da vida humana." }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const contributionText = document.getElementById("contribution");

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    quoteText.textContent = `"${randomQuote.text}"`;
    authorText.textContent = `- ${randomQuote.author}`;
    contributionText.textContent = `(${randomQuote.contribution})`;
}

// Show a random quote on page load
window.onload = displayRandomQuote;

// Optionally, you can trigger a new quote on a button click:
document.getElementById("new-quote").addEventListener("click", displayRandomQuote);