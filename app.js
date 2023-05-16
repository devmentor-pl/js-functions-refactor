document.addEventListener('DOMContentLoaded', function () {
  let roundsPlayed = 1;
  const luckyNumberEl = document.querySelector('.luckyNumber');
  const luckyNumber = generateRandomNumber();
  luckyNumberEl.innerText = luckyNumber;

  const gameEl = document.querySelector('.game');
  
  const luckyButton = document.querySelector('.luckyButton');
  luckyButton.addEventListener('click', playRound);

  function playRound() {
    const userNumber = generateRandomNumber();

    if (isGameWon(luckyNumber, userNumber)) {
      const winMsg = createMessageElement(
        gameEl,
        `Gratulacje, wygrałeś! Twoja szczęśliwa liczba to: ${userNumber}. Koniec gry.`
      );
      winMsg.style.color = 'red';

      disableButton(luckyButton);
    } else if (isGameLost(roundsPlayed, luckyNumber, userNumber)) {
      createMessageElement(
        gameEl,
        `Niestety, Twoja liczba to: ${userNumber}. Koniec gry.`
      );

      disableButton(luckyButton);
    } else {
      createMessageElement(
        gameEl,
        `Niestety, Twoja liczba to: ${userNumber}. Spróbuj jeszcze raz.`
      );
    }

    roundsPlayed++;
  }
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function disableButton(buttonEl) {
  buttonEl.disabled = true;
  buttonEl.classList.add('button-disabled');
}

function createMessageElement(container, message) {
  const messageEl = document.createElement('p');
  messageEl.classList.add('message');
  messageEl.innerText = message;
  container.appendChild(messageEl);
  return messageEl;
}

function isGameLost(roundsPlayed, luckyNumber, userNumber) {
  return roundsPlayed > 2 && luckyNumber !== userNumber;
}

function isGameWon(luckyNumber, userNumber) {
  return luckyNumber === userNumber
}
