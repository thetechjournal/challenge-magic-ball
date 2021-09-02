const adviceEye = document.getElementById('adviceEye');
const btnAdvice = document.getElementById('adviceBtn');
const adviceDisplay = document.getElementById('adviceDisplay');

const life = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

const friendship = [
    "Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.",
    "What you do not want done to yourself, do not do to others.",
    "Be slow to fall into friendship; but when thou art in, continue firm and constant.",
    "One of the most beautiful qualities of true friendship is to understand and to be understood",
    "Let us be grateful to the people who make us happy"
]

const health = [
    "To ensure good health: eat lightly, breathe deeply, live moderately and maintain an interest in life.",
    "A good laugh and a long sleep are the best cures in the doctor’s book.",
    "Remain calm, because peace equals power.",
    "It is exercise alone that supports the spirits, and keeps the mind in vigor.",
    "Keep your vitality. A life without health is like a river without water."
]

const knowledge = [
    "To attain knowledge, add things everyday. To attain wisdom, remove things every day.",
    "To acquire knowledge, one must study; but to acquire wisdom, one must observe",
    "Real knowledge is to know the extent of one's ignorance",
    "The ability to perceive or think differently is more important than the knowledge gained",
    "Knowledge rests not upon truth alone, but upon error also",
    "Knowledge has to be improved, challenged, and increased constantly, or it vanishes",
    "Having knowledge but lacking the power to express it clearly is no better than never having any ideas at all"
]

function removeStylesAdviceEye(){
        adviceEye.classList.remove('health');
        adviceEye.classList.remove('knowledge');
        adviceEye.classList.remove('life');
        adviceEye.classList.remove('friendship');
}

function getQuotes(category, quotesArray){
    document.body.style.backgroundImage = `url('./images/${category}.jpg')`;
    removeStylesAdviceEye();
    adviceEye.classList.add(`${category}`);
    const idx = Math.floor(Math.random() * quotesArray.length);
    adviceDisplay.textContent = quotesArray[idx];
}

btnAdvice.addEventListener('click', () => {
    let x = document.getElementById("questions").selectedIndex;
    let choice = document.getElementsByTagName("option")[x].value;

    switch(choice) {
        case 'friendship':
            getQuotes('friendship', friendship);
            break;
        case 'health':
            getQuotes('health', health);
            break;
        case 'life':
            getQuotes('life', life);
        break;  
        case 'knowledge':
            getQuotes('knowledge', knowledge);
        break; 
        default:
          // code block
      }

})


