let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") // query to to samo co get element
let cardsEl = document.getElementById("cards-el")
let player = {
	name: "Per",
	chips: 145
}
let playerEl = document.getElementById("player-el")

function startGame(){
	isAlive=true
	let firstCard = getRandomCard()
	let secoundCard = getRandomCard()
	cards = [firstCard, secoundCard]
	sum = firstCard + secoundCard
	player.chips-=2
	renderGame()
}
function renderGame(){
	
	cardsEl.textContent = "Cards: "
	
	for (let i = 0; i < cards.length; i++){
		cardsEl.textContent += cards[i] + " "
	}
	sumEl.innerText = "Sum: " + sum

if (sum <= 20){
	message = "Want new card?"
} else if(sum === 21) {
	message = "Got Blackjack!"
	player.chips+=10;
	hasBlackJack = true
} else {
	message = "You lose!"
	player.chips-=5;
	isAlive = false
}
messageEl.textContent = message
playerEl.textContent = player.name + ": $" + player.chips
}

function getRandomCard()
{
	let randomNumber = Math.floor(Math.random()*13)+1
	if (randomNumber === 1)
	{
		return 11
	}
	else if (randomNumber >=11)
	{
		return 10
	}
	else
	{
		return randomNumber
	}
}
function newCard(){
	if(isAlive === true && hasBlackJack === false)
	{
	let card = getRandomCard()
	sum += card
	cards.push(card)
	renderGame()
	}
}
function checkCard()
{
	if(isAlive === true && hasBlackJack === false)
	{
	let enemyCard1 = getRandomCard()
	let enemyCard2 = getRandomCard()
	let enemyCards = enemyCard1 + enemyCard2
	if(enemyCards < 21 && enemyCards < sum)
	{
		message = "Enemy Cards: " + enemyCards + " You Win!"
		player.chips+=5;
	}
	else if(enemyCards === sum )
	{
		message = "Enemy Cards: " + enemyCards + " It's Draw!"
	}
	if(enemyCards <= 21 && enemyCards > sum)
	{
		message = "Enemy Cards: " + enemyCards + " You Lose!"
		player.chips-=5;
	}
	}
	messageEl.textContent = message
	playerEl.textContent = player.name + ": $" + player.chips
	isAlive=false;
}

function nameFunction()
{
	player.name = document.getElementById("name-el").value
	let divRemove = document.getElementById("name-div")
	divRemove.remove()
}