import backgroundTwo from '../../../assets/Images/background/bg2.jpg';
import darthVader from '../../../assets/Images/elements/vader.png';
import Planet from '..//.//..//../assets/Images/elements/planet.png';

let Textcotent = `
"Quando o deixei, eu era só o aprendiz; agora eu sou o mestre."
Darth Vader disse essa frase a Obi-Wan Kenobi em "Uma nova esperança", primeiro episódio da trilogia original.<br>Originalmente treinado como Jedi, Darth Vader se voltou para o lado negro. Mais tarde se revela que ele é o pai de Luke Skywalker e da princesa Leia. Relações familiares tortuosas, máscara assustadora e uma inesquecível voz rouca são ingredientes perfeitos para um supervilão galático.
`

let HomeSectionTwo = `
<section id="section-two" class="section background--two" style="background-image: url(${backgroundTwo})">
    <div class="container block-section--two">
            <img src="${darthVader}" alt="Vader">
        <div "text-block--two">
            <p><strong>${Textcotent}</strong></p> 
        </div>     
    </div>
</section>
    `

export default HomeSectionTwo