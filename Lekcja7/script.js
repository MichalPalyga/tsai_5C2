let playersDeck = document.querySelectorAll('.player');
let enemyDeck = document.querySelectorAll('.enemy');
let playerTable = document.querySelector('.player-side');
let enemyTable = document.querySelector('.enemy-side');
let selectedPlayerCard = null;
let selectedEnemyCard = null

playersDeck.forEach((playerCard) => {
    playerCard.addEventListener('click', () => {
        playerCard.classList.add('picked')
        playerTable.appendChild(playerCard)
        selectedPlayerCard = playerCard
        setInterval(compareCards, 2000)
    })
})

enemyDeck.forEach((enemyCard) => {
    enemyCard.addEventListener('click', () => {
        enemyCard.classList.add('picked')
        enemyTable.appendChild(enemyCard)
        selectedEnemyCard = enemyCard
        setInterval(compareCards, 2000)
    })
})

function compareCards() {
    if (selectedEnemyCard && selectedPlayerCard) {
        if (selectedPlayerCard.textContent > selectedEnemyCard.textContent) {
            selectedEnemyCard.remove();
        }
        else if (selectedPlayerCard.textContent < selectedEnemyCard.textContent) {
            selectedPlayerCard.remove();
        }
        else if (selectedPlayerCard.textContent == selectedEnemyCard.textContent) {
            selectedEnemyCard.remove();
            selectedPlayerCard.remove();
        }
    }
}
