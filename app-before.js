// Uruchamiam kod JS dopiero po załadowaniu drzewa DOM
document.addEventListener('DOMContentLoaded', function () {
  let roundsPlayed = 1;

  // Wyszukuję w DOM element dla umieszczenia szczęśliwej liczby
  const luckyNumberEl = document.querySelector('.luckyNumber');
  // Generuję szczęśliwą liczbę i wyświetlam ją użytkownikowi
  const luckyNumber = Math.floor(Math.random() * 5) + 1;
  luckyNumberEl.innerText = luckyNumber;

  // Wyszukuję przycisk losowania i dodaję do niego nasłuchiwanie na kliknięcie
  // Po kliknięciu uruchomi się dfunkcja playRound()
  const luckyButton = document.querySelector('.luckyButton');
  luckyButton.addEventListener('click', playRound);

  function playRound() {
    // Losuję liczbę dla użytkownika
    const userNumber = Math.floor(Math.random() * 5) + 1;
    const gameEl = document.querySelector('.game');

    // Tworzę element wiadomości o wygranej/przegranej i dodaję go do elementu main
    const messageEl = document.createElement('p');
    messageEl.classList.add('message');
    gameEl.appendChild(messageEl);

    if (luckyNumber === userNumber) {
      // Jeśli użytkownik wygrywa, wyświetlam odpowiednią wiadomość
      messageEl.innerText = `Gratulacje, wygrałeś! Twoja szczęśliwa liczba to: ${userNumber}. Koniec gry.`;
      messageEl.style.color = 'red';

      // Blokuję przycisk losowania i nadaję mu odpowiedni styl dzięki klasie
      luckyButton.disabled = true;
      luckyButton.classList.add('button-disabled');
    } else {
      // Jeśli użytkownik przegrywa i nie jest to ostatnia runda, to otrzymuje adekwatną wiadomość
      messageEl.innerText = `Niestety, Twoja liczba to: ${userNumber}. Spróbuj jeszcze raz.`;
    }

    // Jeśli to ostatnia runda rozgrywki i użytkownik nie wygrał, to...
    if (roundsPlayed > 2 && luckyNumber !== userNumber) {
      // Wyświetlam odpowiedni komunikat
      messageEl.innerText = `Niestety, Twoja liczba to: ${userNumber}. Koniec gry.`;

      // Blokuję przycisk losowania i nadaję mu odpowiedni styl dzięki klasie
      luckyButton.disabled = true;
      luckyButton.classList.add('button-disabled');
    }

    // Zwiększam liczbę rund o 1
    roundsPlayed++;
  }
});