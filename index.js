/*

TODO:
- [x] single textbox output
- [x] three textbox output
- [x] use BEM methodology for css
- [ ] animate pin wheels
- [x] responsive styles on mobile

*/

//Each pinwheel image is it's own var for later CSS/JS animation

var pinwheelBeginningElement = document.getElementById("pinwheel-beginning")
var pinwheelMiddleElement = document.getElementById("pinwheel-middle")
var pinwheelEndElement = document.getElementById("pinwheel-end")


//Get each pinwheel from HTML doc

var theoryBeginningElement = document.getElementById("theory-beginning")
var theoryMiddleElement = document.getElementById("theory-middle")
var theoryEndElement = document.getElementById("theory-end")

//Function to randomly generate beginning, middle and end of theory

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


//Create input for beginning, middle and end

let beginning = ["The Queen", "Nicolas Cage", "Bill Gates", "The Jews", "George Soros", "Jeff Bezos", "Jacinda Ardern", "Donald Trump", "The Gays", "Space reptilians", "Feminists", "Science", "ANTIFA", "Big Pharma", "Oprah Winfrey", "McAuley Culkin", "Harambe", "Ke$ha", "Dr. Ashley Bloomfield", "Dance Moms", "Princess Diana", "9/11", "the Catholic Church", "the Dalai Lama", "the Russains", "the radical left", "AOC", "The Spider leadership", "The feline contessa", "Faucci", "Killary", "The Cabal", "CNN", "The Hollywood liberal elite", "NASA", "Big Bird", "the Sesame Street Cabal"]


let middle = ["secretly owns", "controls", "is going to destroy", "is responsible for", "invented", "funds", "eats", "undermines good Christian values", "is building a communist agenda", "is stealing our divine energy source", "coercing us to join a sex cult", "is putting 1080 in baby formula", "is contaminating the gene pool", "is feminising men", "is promoting abortion", "reprogramming our DNA", "replacing children with changelings", "dosing vape juice", "prpagating pro coriander propaganda", "censoring TikTok truths", "genetically modifying the elderly", "is trying to make us believe in dinosaurs", "is spreading the myth of 'electricity'"]

let end = ["babies", " with live laugh love propaganda", "with the bisexual agenda", "the global economy", "by harvesting adrenochrome from children", "chem trails", "bitcoin", "NFTs", "the internet", "heroin", "for BIG DATA", "for oil", "with nuclear waste", "the facebook algorithm", "by teaching critical race theory in schools", "with affirmitive action", "with 5G", "by FORCING us to sneeze into our elbows", "with perpetual Briscoes sales", "with a sound set of sustainable development goals", "militant veganism", "making us all infertile!", "tiger king propaganda", "the climate change LIE", "by putting religion on the blockchain", "to attack and de-throne God", "to calcify our pineal glands", "to lower our collective vibration"]


//Create function that combines random beginning middle and end 'on-click' 
//*Should also display the theory as a text output
//Fuction takes spin stop and start functions below to time spinning

function displayTheory() {
    resetTheoryBeginning()
    resetTheoryMiddle()
    resetTheoryEnd()

    spinPinwheel(pinwheelBeginningElement)

    setTimeout(function() {
        stopPinwheel(pinwheelBeginningElement)
        displayTheoryBeginning()
        spinPinwheel(pinwheelMiddleElement)
    }, 3000)

    setTimeout(function() {
        stopPinwheel(pinwheelMiddleElement)
        displayTheoryMiddle()
        spinPinwheel(pinwheelEndElement)
    }, 6000)

    setTimeout(function() {
        stopPinwheel(pinwheelEndElement)
        displayTheoryEnd()
    }, 9000)
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

//Fuctions to add and remove CSS pinwheels--spin class modifier with keyframes animation

function spinPinwheel(pinwheelElement) {
    pinwheelElement.classList.add('pinwheels--spin')
}

function stopPinwheel(pinwheelElement) {
    pinwheelElement.classList.remove('pinwheels--spin')
}