/*

TODO:
- [x] single textbox output
- [x] three textbox output
- [x] use BEM methodology for css
- [ ] animate pin wheels
- [x] responsive styles on mobile

*/

//Each pinwheel image is it's own var for later CSS/JS animation

var pinwheel0 = document.getElementById("pinwheel0")
var pinwheel1 = document.getElementById("pinwheel1")
var pinwheel2 = document.getElementById("pinwheel2")


//Get each pinwheel from HTML doc

var theoryBeginningElement = document.getElementById("theory-beginning")
var theoryMiddleElement = document.getElementById("theory-middle")
var theoryEndElement = document.getElementById("theory-end")


var animationElement = document.getElementsByClassName("pinwheels__pinwheel")

//Function to randomly generate beginning, middle and end of theory

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


//Create input for beginning, middle and end

let beginning = ["The Queen", "Nicolas Cage", "Bill Gates", "The Jews", "George Soros", "Jeff Bezos", "Jacinda Ardern", "Donald Trump", "The Chinese", "The Gays", "Space reptilians", "Feminists", "Science", "ANTIFA", "Big Pharma", "Oprah Winfrey", "McAuley Culkin", "Harambe", "Ke$ha", "Dr. Ashley Bloomfield", "Dance Moms", "Princess Diana", "9/11", "the Catholic Church", "the Dalai Lama", "the Russains", "the radical left", "AOC"]


let middle = ["secretly owns", "controls", "is going to destroy", "is responsible for", "invented", "funds", "eats", "undermines good Christian values", "is building a communist agenda", "is stealing our divine energy source", "is running child sex rings", "coercing us to join a sex cult", "is putting 1080 in baby formula", "is contaminating the gene pool"]

let end = ["babies", " with live laugh love propaganda", "with the bisexual agenda", "the global economy", "adrenochrome", "chem trails", "bitcoin", "NFTs", "the internet", "heroin", "for BIG DATA", "for oil", "with nuclear waste", "the facebook algorithm", "by teaching critical race theory in schools", "with affirmitive action", "with 5G", "by FORCING us to sneeze into our elbows", "with perpetual Briscoes sales", "with a sound set of sustainable development goals", "militant veganism", "making us all infertile!", "tiger king propaganda", "the climate change LIE"]


//Create function that combines random beginning middle and end 'on-click' 
//*Should also display the theory as a text output


function displayTheory() {
    resetTheoryBeginning()
    resetTheoryMiddle()
    resetTheoryEnd()


    displayTheoryBeginning()
    setTimeout(displayTheoryMiddle, 2000)
    setTimeout(displayTheoryEnd, 4000)

}


function animation() {
    animationElement = displayTheory()
}
//Functions to generate beginning middle and end of theory

function generateTheoryBeginning() {
    return beginning[getRandomArbitrary(0, beginning.length)]

}

function generateTheoryMiddle() {
    return middle[getRandomArbitrary(0, middle.length)]
}

function generateTheoryEnd() {
    return end[getRandomArbitrary(0, end.length)]
}

//functions to display beginning middle and end

function displayTheoryBeginning() {
    var theoryBeginning = generateTheoryBeginning()
    theoryBeginningElement.textContent = theoryBeginning
}

function displayTheoryMiddle() {
    var theoryMiddle = generateTheoryMiddle()
    theoryMiddleElement.textContent = theoryMiddle

}

function displayTheoryEnd() {
    var theoryEnd = generateTheoryEnd()
    theoryEndElement.textContent = theoryEnd
}

//Functions to reset beginning middle and end

function resetTheoryBeginning() {
    theoryBeginningElement.textContent = ''
}

function resetTheoryMiddle() {
    theoryMiddleElement.textContent = ''

}

function resetTheoryEnd() {
    theoryEndElement.textContent = ''
}